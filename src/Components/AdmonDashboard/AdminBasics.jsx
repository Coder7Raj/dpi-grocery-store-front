import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { FaBoxOpen, FaShoppingCart, FaUsers } from "react-icons/fa";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function AdminBasics() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [userActivity, setUserActivity] = useState([]);

  const productSalesData = [
    { name: "Week 1", sales: 100 },
    { name: "Week 2", sales: 200 },
    { name: "Week 3", sales: 150 },
    { name: "Week 4", sales: 300 },
  ];

  const mostSoldProducts = [
    { name: "Product A", sales: 340 },
    { name: "Product B", sales: 290 },
    { name: "Product C", sales: 220 },
    { name: "Product D", sales: 180 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productRes, userRes] = await Promise.all([
          axios.get(
            "https://dpi-grocery-store-backend-1.onrender.com/api/product/all"
          ),
          axios.get(
            "https://dpi-grocery-store-backend-1.onrender.com/api/user/alluser"
          ),
        ]);

        setProducts(productRes.data?.products || []);
        const allUsers = userRes.data || [];
        setUsers(allUsers);

        // Generate monthly activity from user.createdAt
        const monthlyData = {};
        allUsers.forEach((user) => {
          const month = dayjs(user.createdAt).format("MMM");
          monthlyData[month] = (monthlyData[month] || 0) + 1;
        });

        const formatted = Object.keys(monthlyData).map((month) => ({
          name: month,
          users: monthlyData[month],
        }));

        setUserActivity(formatted);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-full h-full py-2">
      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <div className="text-3xl text-blue-500">
            <FaUsers />
          </div>
          <div>
            <p className="text-gray-600 text-sm">User Count</p>
            <h3 className="text-xl font-bold">{users?.length}</h3>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <div className="text-3xl text-green-500">
            <FaBoxOpen />
          </div>
          <div>
            <p className="text-gray-600 text-sm">Products Count</p>
            <h3 className="text-xl font-bold">{products?.length}</h3>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <div className="text-3xl text-orange-500">
            <FaShoppingCart />
          </div>
          <div>
            <p className="text-gray-600 text-sm">Total Purchased</p>
            <h3 className="text-xl font-bold">400</h3>
          </div>
        </div>
      </div>

      {/* Graphs */}
      <div className="grid items-center gap-4 grid-cols-1 lg:grid-cols-2 mb-8">
        {/* User Activity */}
        <div className="w-full h-[300px] bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-2">User Activity</h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={userActivity}>
              <Line type="monotone" dataKey="users" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Product Sales */}
        <div className="w-full h-[300px] bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Product Sales</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={productSalesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Most Sold Products & World Map */}
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        {/* Most Sold Products */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Most Sold Products</h2>
          <ul className="space-y-3">
            {mostSoldProducts.map((product, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-3 border rounded-lg"
              >
                <span>{product.name}</span>
                <span className="font-bold">{product.sales} sales</span>
              </li>
            ))}
          </ul>
        </div>

        {/* World Map */}
        <div>
          <h2 className="text-xl font-semibold mb-2">World Map</h2>
          <div className="border shadow rounded-md overflow-auto">
            <ComposableMap
              projectionConfig={{ scale: 150 }}
              width={800}
              height={450}
            >
              <ZoomableGroup zoom={1}>
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: { fill: "#E0E0E0", outline: "none" },
                          hover: { fill: "#F53", outline: "none" },
                          pressed: { fill: "#E42", outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>
          </div>
        </div>
      </div>
    </section>
  );
}
