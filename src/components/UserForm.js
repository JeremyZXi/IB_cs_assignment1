// src/components/UserForm.jsx
import { useState } from 'react';

function UserForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        age: '',
        gender: '',
        height: '',
        weight: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block">Age (15-80):</label>
                <input
                    type="number"
                    min="15"
                    max="80"
                    required
                    className="border p-2 w-full"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: Number(e.target.value)})}
                />
            </div>

            <div>
                <label className="block">Gender:</label>
                <select
                    required
                    className="border p-2 w-full"
                    value={formData.gender}
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                >
                    <option value="">Select gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>
            </div>

            <div>
                <label className="block">Height (cm):</label>
                <input
                    type="number"
                    required
                    min="1"
                    className="border p-2 w-full"
                    value={formData.height}
                    onChange={(e) => setFormData({...formData, height: Number(e.target.value)})}
                />
            </div>

            <div>
                <label className="block">Weight (kg):</label>
                <input
                    type="number"
                    min="1"
                    required
                    className="border p-2 w-full"
                    value={formData.weight}
                    onChange={(e) => setFormData({...formData, weight: Number(e.target.value)})}
                />
            </div>

            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                Next
            </button>
        </form>
    );
}

export default UserForm;
