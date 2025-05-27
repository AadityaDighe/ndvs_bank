
import { useState, useEffect, useMemo } from 'react';
import data from '../../assets/data/Deaf_data.json';

interface Account {
    id: number;
    name: string;
}

const DeafAccount = () => {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;

    useEffect(() => {
        // Load data
        setAccounts(data);
    }, []);

    // Filter accounts based on search term
    const filteredAccounts = useMemo(() => {
        return accounts.filter(account =>
            account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            account.id.toString().includes(searchTerm)
        );
    }, [searchTerm, accounts]);

    // Pagination
    const totalPages = Math.ceil(filteredAccounts.length / itemsPerPage);
    const paginatedAccounts = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredAccounts.slice(startIndex, startIndex + itemsPerPage);
    }, [currentPage, filteredAccounts, itemsPerPage]);

    // Reset to first page when search term changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Inoperative Accounts</h1>

            {/* Search Input */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search by name or ID..."
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Account Name
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {paginatedAccounts.length > 0 ? (
                            paginatedAccounts.map((account) => (
                                <tr key={account.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {account.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {account.name}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={2} className="px-6 py-4 text-center text-sm text-gray-500">
                                    No accounts found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                        <span className="font-medium">
                            {Math.min(currentPage * itemsPerPage, filteredAccounts.length)}
                        </span>{' '}
                        of <span className="font-medium">{filteredAccounts.length}</span> results
                    </p>
                </div>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 border rounded-md ${currentPage === 1 ? 'bg-gray-100 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages || totalPages === 0}
                        className={`px-4 py-2 border rounded-md ${currentPage === totalPages || totalPages === 0 ? 'bg-gray-100 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeafAccount;