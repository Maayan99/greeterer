import React, { useState } from 'react';

const AccountSettings: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
      <div className="space-y-4">
        <div className="border rounded-lg overflow-hidden">
          <button
            className="w-full p-4 text-left font-semibold bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            onClick={() => toggleSection('personal')}
          >
            Personal Information
          </button>
          {expandedSection === 'personal' && (
            <div className="p-4 animate-fadeIn">
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                </div>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200">
                  Save Changes
                </button>
              </form>
            </div>
          )}
        </div>
        <div className="border rounded-lg overflow-hidden">
          <button
            className="w-full p-4 text-left font-semibold bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            onClick={() => toggleSection('payment')}
          >
            Payment Methods
          </button>
          {expandedSection === 'payment' && (
            <div className="p-4 animate-fadeIn">
              <p>Manage your payment methods here.</p>
            </div>
          )}
        </div>
        <div className="border rounded-lg overflow-hidden">
          <button
            className="w-full p-4 text-left font-semibold bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            onClick={() => toggleSection('notifications')}
          >
            Notification Preferences
          </button>
          {expandedSection === 'notifications' && (
            <div className="p-4 animate-fadeIn">
              <p>Set your notification preferences here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
