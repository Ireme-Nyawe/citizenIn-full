import React, { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, X, Search, Building2, Phone, Mail, MapPin } from "lucide-react";
import { axiosInstance } from "../../../utils/axios";
import { toast } from "sonner";

export interface IInstitution {
  _id?: string;
  name: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface InstitutionFormData {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
}

const Institutions: React.FC = () => {
  const [institutions, setInstitutions] = useState<IInstitution[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingInstitution, setEditingInstitution] = useState<IInstitution | null>(
    null
  );
  const [formData, setFormData] = useState<InstitutionFormData>({
    name: "",
    description: "",
    address: "",
    phone: "",
    email: "",
  });

  const filteredInstitutions = institutions.filter(
    (institution) =>
      institution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      institution.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      institution.address?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const fetchInstitutions = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/api/agency");
      console.log("response", response);

      if (response.status == 200) {
        const data = response.data.data;
        setInstitutions(data);
      } else {
        console.error("Failed to fetch institutions");
      }
    } catch (error) {
      console.error("Error fetching institutions:", error);
    } finally {
      setLoading(false);
    }
  };

  const createInstitution = async (institutionData: InstitutionFormData) => {
    try {
      const response = await axiosInstance.post("/api/agency", institutionData);
      console.log(response);

      if (response.status == 201) {
        const newInstitution = response.data.data;
        setInstitutions((prev) => [...prev, newInstitution]);
        resetForm();
        toast.success(response.data.message);
        setShowModal(false);
      } else {
        console.error("Failed to create institution");
        toast.error(response.data.message);
      }
    } catch (error: any) {
      console.error("Error creating institution:", error);
      toast.error(error.message);
    }
  };

  const updateInstitution = async (id: string, institutionData: InstitutionFormData) => {
    try {
      const response = await axiosInstance.put(
        `/api/agency/${id}`,
        institutionData
      );

      if (response.status == 200) {
        const updatedInstitution = response.data.data;
        setInstitutions((prev) =>
          prev.map((inst) => (inst._id === id ? updatedInstitution : inst))
        );
        toast.success(response.data.message);
        resetForm();
        setShowModal(false);
        setEditingInstitution(null);
      } else {
        console.error("Failed to update institution");
      }
    } catch (error) {
      console.error("Error updating institution:", error);
    }
  };

  const deleteInstitution = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this institution?")) {
      try {
        const response = await axiosInstance.delete(`/api/agency/${id}`);
        if (response.status == 200) {
          setInstitutions((prev) => prev.filter((inst) => inst._id !== id));
          toast.success(response.data.message);
        } else {
          toast.error("Failed to delete institution");
        }
      } catch (error: any) {
        console.error("Error deleting institution:", error);
        toast.error(error.message);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingInstitution) {
      updateInstitution(editingInstitution._id!, formData);
    } else {
      createInstitution(formData);
    }
  };

  const handleEdit = (institution: IInstitution) => {
    setEditingInstitution(institution);
    setFormData({
      name: institution.name,
      description: institution.description || "",
      address: institution.address || "",
      phone: institution.phone || "",
      email: institution.email || "",
    });
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      address: "",
      phone: "",
      email: "",
    });
    setEditingInstitution(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchInstitutions();
  }, []);

  return (
    <div className="p-4 md:p-6 bg-white min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 flex items-center gap-2">
          <Building2 size={32} />
          Institutions
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm md:text-base"
        >
          <Plus size={20} />
          <span className="hidden sm:inline">Add Institution</span>
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
            placeholder="Search institutions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="hidden lg:block">
          <table className="w-full">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    Loading institutions...
                  </td>
                </tr>
              ) : filteredInstitutions.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    No institutions found
                  </td>
                </tr>
              ) : (
                filteredInstitutions.map((institution) => (
                  <tr key={institution._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {institution.name}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {institution.email && (
                          <div className="flex items-center gap-1 mb-1">
                            <Mail size={12} />
                            {institution.email}
                          </div>
                        )}
                        {institution.phone && (
                          <div className="flex items-center gap-1">
                            <Phone size={12} />
                            {institution.phone}
                          </div>
                        )}
                        {!institution.email && !institution.phone && "No contact"}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs truncate">
                        {institution.address && (
                          <div className="flex items-center gap-1">
                            <MapPin size={12} />
                            {institution.address}
                          </div>
                        )}
                        {!institution.address && "No address"}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs truncate">
                        {institution.description || "No description"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {institution.createdAt
                        ? new Date(institution.createdAt).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEdit(institution)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => deleteInstitution(institution._id!)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="lg:hidden">
          {loading ? (
            <div className="p-6 text-center text-gray-500">
              Loading institutions...
            </div>
          ) : filteredInstitutions.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No institutions found
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredInstitutions.map((institution) => (
                <div key={institution._id} className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 text-lg flex items-center gap-2">
                        <Building2 size={18} />
                        {institution.name}
                      </h3>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleEdit(institution)}
                        className="text-blue-600 hover:text-blue-900 p-2"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => deleteInstitution(institution._id!)}
                        className="text-red-600 hover:text-red-900 p-2"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2 mb-3">
                    {institution.email && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail size={14} />
                        <a href={`mailto:${institution.email}`} className="text-blue-600">
                          {institution.email}
                        </a>
                      </div>
                    )}
                    {institution.phone && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone size={14} />
                        <a href={`tel:${institution.phone}`} className="text-blue-600">
                          {institution.phone}
                        </a>
                      </div>
                    )}
                    {institution.address && (
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <MapPin size={14} className="mt-0.5" />
                        <span>{institution.address}</span>
                      </div>
                    )}
                  </div>

                  {institution.description && (
                    <p className="text-sm text-gray-600 mb-2">
                      {institution.description}
                    </p>
                  )}

                  <p className="text-xs text-gray-500">
                    Created: {institution.createdAt
                      ? new Date(institution.createdAt).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 md:p-6 w-full max-w-lg mx-auto max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-900">
                {editingInstitution ? "Edit Institution" : "Add New Institution"}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  placeholder="Enter institution name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={2}
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  placeholder="Enter institution address"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  placeholder="Enter institution description (optional)"
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
                  {editingInstitution ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Institutions;