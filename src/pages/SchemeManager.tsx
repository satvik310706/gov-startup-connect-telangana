
import { motion } from "framer-motion";
import { ArrowLeft, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SchemeManager = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-500 text-white">
      <header className="bg-white/5 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard/official">
                <Button variant="outline" className="bg-white/10 border-white/20 text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <h1 className="text-3xl font-bold">Scheme Manager</h1>
            </div>
            <Button className="bg-gradient-to-r from-indigo-600 to-indigo-800">
              <Plus className="w-4 h-4 mr-2" />
              Create Scheme
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <h2 className="text-2xl font-bold mb-4">Government Scheme Management</h2>
          <p className="text-white/70">Create, edit, and manage government schemes for startups</p>
        </motion.div>
      </main>
    </div>
  );
};

export default SchemeManager;
