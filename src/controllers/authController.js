const users = [
    { username: "admin", password: "admin123", role: "admin" },
    { username: "user", password: "user123", role: "user" }
  ];
  
  exports.loginUser = (req, res) => {
    const { username, password } = req.body;
  
    const user = users.find((u) => u.username === username && u.password === password);
    if (!user) return res.status(401).json({ message: "Invalid username or password" });
  
    res.json({ message: "Login successful", role: user.role });
  };
  