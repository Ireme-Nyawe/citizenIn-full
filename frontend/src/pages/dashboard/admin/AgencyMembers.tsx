import React, { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, X, Search, Users, Building2, Phone, Mail, UserCheck, Shield } from "lucide-react";
import { axiosInstance } from "../../../utils/axios";
import { toast } from "sonner";

export interface IUser {
  _id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
  is2fa?: boolean;
  isActive?: boolean;
  phone?: string;
  profile?: string;
}

export interface IAgency {
  _id?: string;
  name: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
}

export interface IAgencyMember {
  _id?: string;
  userId: string | IUser;
  agencyId: string | IAgency;
  position?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface AgencyMemberFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  is2fa: boolean;
  phone: string;
  agencyId: string;
  position: string;
}

interface UpdateMemberFormData {
  position: string;
}

const AgencyMembers: React.FC = () => {
  const [agencyMembers, setAgencyMembers] = useState<IAgencyMember[]>([]);
  const [agencies, setAgencies] = useState<IAgency[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingMember, setEditingMember] = useState<IAgencyMember | null>(null);
  const [formData, setFormData] = useState<AgencyMemberFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    is2fa: false,
    phone: "",
    agencyId: "",
    position: "",
  });
  const [updateFormData, setUpdateFormData] = useState<UpdateMemberFormData>({
    position: "",
  });

  const filteredMembers = agencyMembers.filter((member) => {
    const user = member.userId as IUser;
    const agency = member.agencyId as IAgency;
    const searchLower = searchTerm.toLowerCase();
    
    return (
      user?.firstName?.toLowerCase().includes(searchLower) ||
      user?.lastName?.toLowerCase().includes(searchLower) ||
      user?.email?.toLowerCase().includes(searchLower) ||
      agency?.name?.toLowerCase().includes(searchLower) ||
      member.position?.toLowerCase().includes(searchLower)
    );
  });

  const fetchAgencyMembers = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/api/agency-member");
          if (response.status == 201) {
        const data = response.data.data;
        setAgencyMembers(data);
      } else {
        console.error("Failed to fetch agency members");
      }
    } catch (error) {
      console.error("Error fetching agency members:", error);
    } finally {
      setLoading(false);
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

  const createAgencyMember = async (memberData: AgencyMemberFormData) => {
    try {
      const response = await axiosInstance.post("/api/agency-member", memberData);
      console.log(response);

      if (response.status == 201) {
        const newMember = response.data.data;
        setAgencyMembers((prev) => [...prev, newMember]);
        resetForm();
        toast.success(response.data.message);
        setShowModal(false);
      } else {
        console.error("Failed to create agency member");
        toast.error(response.data.message);
      }
    } catch (error: any) {
      console.error("Error creating agency member:", error);
      toast.error(error.message);
    }
  };

  const updateAgencyMember = async (id: string, memberData: UpdateMemberFormData) => {
    try {
      const response = await axiosInstance.put(
        `/api/agency-member/${id}`,
        memberData
      );

      if (response.status == 200) {
        const updatedMember = response.data.data;
        setAgencyMembers((prev) =>
          prev.map((member) => (member._id === id ? updatedMember : member))
        );
        toast.success(response.data.message);
        resetForm();
        setShowModal(false);
        setEditingMember(null);
      } else {
        console.error("Failed to update agency member");
      }
    } catch (error) {
      console.error("Error updating agency member:", error);
    }
  };

  const deleteAgencyMember = async (id: string) => {
    if (window.confirm("Are you sure you want to remove this member?")) {
      try {
        const response = await axiosInstance.delete(`/api/agency-member/${id}`);
        if (response.status == 200) {
          setAgencyMembers((prev) => prev.filter((member) => member._id !== id));
          toast.success(response.data.message);
        } else {
          toast.error("Failed to remove agency member");
        }
      } catch (error: any) {
        console.error("Error deleting agency member:", error);
        toast.error(error.message);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingMember) {
      updateAgencyMember(editingMember._id!, updateFormData);
    } else {
      createAgencyMember(formData);
    }
  };

  const handleEdit = (member: IAgencyMember) => {
    setEditingMember(member);
    setUpdateFormData({
      position: member.position || "",
    });
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "",
      is2fa: false,
      phone: "",
      agencyId: "",
      position: "",
    });
    setUpdateFormData({
      position: "",
    });
    setEditingMember(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    if (editingMember) {
      setUpdateFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  useEffect(() => {
    fetchAgencyMembers();
    fetchAgencies();
  }, []);

  const getUserFullName = (user: IUser) => {
    return `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Unknown User';
  };

  return (
    <div className="p-4 md:p-6 bg-white min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 flex items-center gap-2">
          <Users size={32} />
          Agency Members Management
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm md:text-base"
        >
          <Plus size={20} />
          <span className="hidden sm:inline">Add Member</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>

      <div className="mb-6">
        <div className="relative max-w-full sm:max-w-md">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="hidden xl:block">
          <table className="w-full">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Member
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Agency
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Role & Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Joined
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                    Loading agency members...
                  </td>
                </tr>
              ) : filteredMembers.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                    No agency members found
                  </td>
                </tr>
              ) : (
                filteredMembers.map((member) => {
                  const user = member.userId as IUser;
                  const agency = member.agencyId as IAgency;
                  return (
                    <tr key={member._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-blue-800 font-medium text-sm">
                              {user?.firstName?.[0]}{user?.lastName?.[0]}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {getUserFullName(user)}
                            </div>
                            <div className="text-sm text-gray-500">{user?.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Building2 size={16} className="text-gray-400" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {agency?.name}
                            </div>
                            {agency?.email && (
                              <div className="text-xs text-gray-500">{agency.email}</div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {member.position || 'No Position'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {user?.phone && (
                            <div className="flex items-center gap-1 mb-1">
                              <Phone size={12} />
                              {user.phone}
                            </div>
                          )}
                          {user?.email && (
                            <div className="flex items-center gap-1">
                              <Mail size={12} />
                              {user.email}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1">
                            <Shield size={12} />
                            <span className="text-xs font-medium text-gray-700">
                              {user?.role}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <UserCheck size={12} />
                            <span className={`text-xs ${user?.isActive ? 'text-green-600' : 'text-red-600'}`}>
                              {user?.isActive ? 'Active' : 'Inactive'}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {member.createdAt
                          ? new Date(member.createdAt).toLocaleDateString()
                          : "N/A"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => deleteAgencyMember(member._id!)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="xl:hidden">
          {loading ? (
            <div className="p-6 text-center text-gray-500">
              Loading agency members...
            </div>
          ) : filteredMembers.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No agency members found
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredMembers.map((member) => {
                const user = member.userId as IUser;
                const agency = member.agencyId as IAgency;
                return (
                  <div key={member._id} className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center flex-1">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-800 font-medium">
                            {user?.firstName?.[0]}{user?.lastName?.[0]}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 text-lg">
                            {getUserFullName(user)}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Building2 size={14} className="text-gray-400" />
                            <span className="text-sm text-gray-600">{agency?.name}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => handleEdit(member)}
                          className="text-blue-600 hover:text-blue-900 p-2"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => deleteAgencyMember(member._id!)}
                          className="text-red-600 hover:text-red-900 p-2"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {member.position || 'No Position'}
                      </span>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        {user?.email && (
                          <div className="flex items-center gap-1">
                            <Mail size={14} />
                            <span>{user.email}</span>
                          </div>
                        )}
                        {user?.phone && (
                          <div className="flex items-center gap-1">
                            <Phone size={14} />
                            <span>{user.phone}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex gap-4 text-xs">
                        <div className="flex items-center gap-1">
                          <Shield size={12} />
                          <span className="text-gray-700">{user?.role}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <UserCheck size={12} />
                          <span className={user?.isActive ? 'text-green-600' : 'text-red-600'}>
                            {user?.isActive ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500">
                      Joined: {member.createdAt
                        ? new Date(member.createdAt).toLocaleDateString()
                        : "N/A"}
                    </p>
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
                {editingMember ? "Edit Member Position" : "Add New Agency Member"}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!editingMember ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                        placeholder="Enter first name"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                        placeholder="Enter email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password *
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                      placeholder="Enter password"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                        Role *
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                        placeholder="Enter user role"
                      />
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
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                      Position *
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                      placeholder="Enter position/title"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="is2fa"
                      name="is2fa"
                      checked={formData.is2fa}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="is2fa" className="ml-2 block text-sm text-gray-900">
                      Enable 2FA
                    </label>
                  </div>
                </>
              ) : (
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    Position *
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    required
                    value={updateFormData.position}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    placeholder="Enter position/title"
                  />
                </div>
              )}

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
                  {editingMember ? "Update Position" : "Create Member"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgencyMembers;