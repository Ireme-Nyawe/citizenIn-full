import React, { useState, useEffect } from "react";
import { 
  Plus, 
  X, 
  Search, 
  FileText, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Eye, 
  Building2, 
  Tag, 
  Calendar,
  MessageSquare,
  User,
  ArrowLeft
} from "lucide-react";
import { axiosInstance } from "../../../utils/axios";
import { toast } from "sonner";

export interface IUser {
  _id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
  phone?: string;
}

export interface IAgency {
  _id?: string;
  name: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
}

export interface ICategory {
  _id?: string;
  name: string;
  type: string;
  description?: string;
}

export interface IResponse {
  _id?: string;
  complaintId: string;
  message: string;
  respondedBy: string | IUser;
  createdAt?: string;
  updatedAt?: string;
}

export interface IComplaint {
  _id?: string;
  userId: string | IUser;
  categoryId: string | ICategory;
  agencyId: string | IAgency;
  title: string;
  message: string;
  status?: "pending" | "resolved" | "rejected";
  attachments?: string[];
  createdAt?: string;
  updatedAt?: string;
}

interface ComplaintFormData {
  categoryId: string;
  agencyId: string;
  title: string;
  message: string;
  userId:any;
}

const Complaints: React.FC = () => {
    const profile = localStorage.getItem('profile');
    const user = profile ? JSON.parse(profile) : null;
  const [complaints, setComplaints] = useState<IComplaint[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [agencies, setAgencies] = useState<IAgency[]>([]);
  const [responses, setResponses] = useState<IResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState<IComplaint | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [formData, setFormData] = useState<ComplaintFormData>({
    categoryId: "",
    agencyId: "",
    title: "",
    message: "",
    userId:user._id
  });

  const filteredComplaints = complaints.filter((complaint) => {
    const user = complaint.userId as IUser;
    const category = complaint.categoryId as ICategory;
    const agency = complaint.agencyId as IAgency;
    const searchLower = searchTerm.toLowerCase();
    
    const matchesSearch = (
      complaint.title.toLowerCase().includes(searchLower) ||
      complaint.message.toLowerCase().includes(searchLower) ||
      user?.firstName?.toLowerCase().includes(searchLower) ||
      user?.lastName?.toLowerCase().includes(searchLower) ||
      category?.name?.toLowerCase().includes(searchLower) ||
      agency?.name?.toLowerCase().includes(searchLower)
    );

    const matchesStatus = statusFilter === "all" || complaint.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const fetchComplaints = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/api/complaint/citizen");
      console.log("response", response);

      if (response.status == 200) {
        const data = response.data.data;
        setComplaints(data);
      } else {
        console.error("Failed to fetch complaints");
      }
    } catch (error) {
      console.error("Error fetching complaints:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get("/api/category");
      if (response.status == 200) {
        const data = response.data.data;
        setCategories(data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchAgencies = async () => {
    try {
      const response = await axiosInstance.get("/api/agency");
      if (response.status == 200) {
        const data = response.data.data;
        setAgencies(data);
      }
    } catch (error) {
      console.error("Error fetching agencies:", error);
    }
  };

  const fetchResponses = async (complaintId: string) => {
    try {
      const response = await axiosInstance.get(`/api/response/${complaintId}`);
      if (response.status == 200) {
        const data = response.data.data;
        setResponses(data);
      }
    } catch (error) {
      console.error("Error fetching responses:", error);
    }
  };

  const createComplaint = async (complaintData: ComplaintFormData) => {
    try {
      const response = await axiosInstance.post("/api/complaint", complaintData);
      console.log(response);

      if (response.status == 201) {
        const newComplaint = response.data.data;
        setComplaints((prev) => [newComplaint, ...prev]);
        resetForm();
        toast.success(response.data.message);
        setShowModal(false);
      } else {
        console.error("Failed to create complaint");
        toast.error(response.data.message);
      }
    } catch (error: any) {
      console.error("Error creating complaint:", error);
      toast.error(error.message);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createComplaint(formData);
  };

  const handleViewDetails = async (complaint: IComplaint) => {
    setSelectedComplaint(complaint);
    await fetchResponses(complaint._id!);
    setShowDetailModal(true);
  };

  const resetForm = () => {
    setFormData({
      categoryId: "",
      agencyId: "",
      title: "",
      message: "",
      userId:user._id
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
  };

  const handleCloseDetailModal = () => {
    setShowDetailModal(false);
    setSelectedComplaint(null);
    setResponses([]);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchComplaints();
    fetchCategories();
    fetchAgencies();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock size={16} className="text-yellow-500" />;
      case "resolved":
        return <CheckCircle size={16} className="text-green-500" />;
      case "rejected":
        return <XCircle size={16} className="text-red-500" />;
      default:
        return <Clock size={16} className="text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getUserFullName = (user: IUser) => {
    return `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Unknown User';
  };

  return (
    <div className="p-4 md:p-6 bg-white min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 flex items-center gap-2">
          <FileText size={32} />
          My Complaints
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm md:text-base"
        >
          <Plus size={20} />
          <span className="hidden sm:inline">New Complaint</span>
          <span className="sm:hidden">New</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search complaints..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="resolved">Resolved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="hidden lg:block">
          <table className="w-full">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Complaint
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Agency
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Submitted
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    Loading complaints...
                  </td>
                </tr>
              ) : filteredComplaints.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    No complaints found
                  </td>
                </tr>
              ) : (
                filteredComplaints.map((complaint) => {
                  const category = complaint.categoryId as ICategory;
                  const agency = complaint.agencyId as IAgency;
                  return (
                    <tr key={complaint._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900 mb-1">
                            {complaint.title}
                          </div>
                          <div className="text-sm text-gray-500 truncate max-w-xs">
                            {complaint.message}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Tag size={16} className="text-gray-400" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {category?.name}
                            </div>
                            <div className="text-xs text-gray-500">{category?.type}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Building2 size={16} className="text-gray-400" />
                          <div className="text-sm text-gray-900">{agency?.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                            complaint.status || "pending"
                          )}`}
                        >
                          {getStatusIcon(complaint.status || "pending")}
                          {complaint.status || "pending"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {complaint.createdAt
                          ? new Date(complaint.createdAt).toLocaleDateString()
                          : "N/A"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleViewDetails(complaint)}
                          className="text-blue-600 hover:text-blue-900 flex items-center gap-1"
                        >
                          <Eye size={16} />
                          View Details
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="lg:hidden">
          {loading ? (
            <div className="p-6 text-center text-gray-500">
              Loading complaints...
            </div>
          ) : filteredComplaints.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No complaints found
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredComplaints.map((complaint) => {
                const category = complaint.categoryId as ICategory;
                const agency = complaint.agencyId as IAgency;
                return (
                  <div key={complaint._id} className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 text-lg mb-1">
                          {complaint.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {complaint.message}
                        </p>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ml-4 ${getStatusColor(
                          complaint.status || "pending"
                        )}`}
                      >
                        {getStatusIcon(complaint.status || "pending")}
                        {complaint.status || "pending"}
                      </span>
                    </div>

                    <div className="space-y-2 mb-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Tag size={14} />
                        <span>{category?.name} ({category?.type})</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Building2 size={14} />
                        <span>{agency?.name}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar size={14} />
                        <span>
                          {complaint.createdAt
                            ? new Date(complaint.createdAt).toLocaleDateString()
                            : "N/A"}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleViewDetails(complaint)}
                      className="w-full bg-blue-50 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-100 flex items-center justify-center gap-2 transition-colors"
                    >
                      <Eye size={16} />
                      View Details & Responses
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 md:p-6 w-full max-w-2xl mx-auto max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-900">
                Submit New Complaint
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    id="categoryId"
                    name="categoryId"
                    required
                    value={formData.categoryId}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name} ({category.type})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="agencyId" className="block text-sm font-medium text-gray-700 mb-2">
                    Agency *
                  </label>
                  <select
                    id="agencyId"
                    name="agencyId"
                    required
                    value={formData.agencyId}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  >
                    <option value="">Select Agency</option>
                    {agencies.map((agency) => (
                      <option key={agency._id} value={agency._id}>
                        {agency.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  placeholder="Enter complaint title"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  placeholder="Describe your complaint in detail..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm md:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                >
                  Submit Complaint
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showDetailModal && selectedComplaint && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 md:p-6 w-full max-w-4xl mx-auto max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={handleCloseDetailModal}
                className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                Back to Complaints
              </button>
              <button
                onClick={handleCloseDetailModal}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X size={24} />
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-0">
                  {selectedComplaint.title}
                </h2>
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    selectedComplaint.status || "pending"
                  )}`}
                >
                  {getStatusIcon(selectedComplaint.status || "pending")}
                  {selectedComplaint.status || "pending"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Tag size={16} className="text-gray-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {(selectedComplaint.categoryId as ICategory)?.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {(selectedComplaint.categoryId as ICategory)?.type}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 size={16} className="text-gray-400" />
                  <div className="text-sm text-gray-900">
                    {(selectedComplaint.agencyId as IAgency)?.name}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-gray-400" />
                  <div className="text-sm text-gray-900">
                    {selectedComplaint.createdAt
                      ? new Date(selectedComplaint.createdAt).toLocaleDateString()
                      : "N/A"}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Complaint Details</h3>
                <p className="text-gray-700 leading-relaxed">{selectedComplaint.message}</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                  <MessageSquare size={20} />
                  Responses ({responses.length})
                </h3>
              </div>

              <div className="max-h-96 overflow-y-auto">
                {responses.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">
                    No responses yet. The agency will respond to your complaint soon.
                  </div>
                ) : (
                  <div className="divide-y divide-gray-200">
                    {responses.map((response) => {
                      const respondedBy = response.respondedBy as IUser;
                      return (
                        <div key={response._id} className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <User size={16} className="text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-medium text-gray-900">
                                  {getUserFullName(respondedBy)}
                                </span>
                                <span className="text-xs text-gray-500">
                                  {response.createdAt
                                    ? new Date(response.createdAt).toLocaleString()
                                    : "N/A"}
                                </span>
                              </div>
                              <div className="text-gray-700 leading-relaxed">
                                {response.message}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Complaints;