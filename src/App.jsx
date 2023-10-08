import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./pages/protected/ProtectedRoute";
import Home from "./pages/dashboard/Main";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Main from "./pages/dashboard/Layouts/Main";
import Create from "./pages/dashboard/Features/Create";
import Edit from "./pages/dashboard/Features/Edit";
import Detail from "./pages/dashboard/Features/Detail";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route index element={<div>hello</div>} />
        <Route path="/" element={<ProtectedRoute><Main /></ProtectedRoute>}>
          <Route path="dashboard" index exact element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="dashboard/create" element={<ProtectedRoute><Create /></ProtectedRoute>} />
          <Route path="dashboard/edit/:userId" element={<ProtectedRoute><Edit /></ProtectedRoute>} />
          <Route path="dashboard/view/:userId" element={<ProtectedRoute><Detail /></ProtectedRoute>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
