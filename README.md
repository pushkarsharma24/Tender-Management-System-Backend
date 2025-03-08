# Tender Management System  

A React Native and Node.js-based tender management system that allows **admins** to create and manage tenders, while **users** can view and place bids.  

## 🚀 Tech Stack  
- **Frontend:** React Native
- **Backend:** Node.js, Express.js, File-based JSON storage 


## 📌 Features  

### Admin Panel  
- Create tenders with details (Name, Description, Start Time, End Time, Buffer Time)  
- View & manage all created tenders  
- Extend tender end time if a bid is placed in the last 5 minutes  
- View all bids sorted in ascending order  

### User Panel  
- View available tenders  
- Submit bids for tenders  
- View the lowest bid for each tender  
- Get notified if a bid is placed in the last 5 minutes  

### Bids Management  
- Display bids in tabular format (Company Name, Bid Cost, Bid Time)  
- Highlight bids placed in the last 5 minutes  

## 🛠️ Setup Instructions  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/pushkarsharma24/Tender-Management-System-Backend.git
cd tender-management-system
```

### 2️⃣ Install Dependencies  

#### Backend (Node.js)
```sh
cd backend
npm install
```

## 3️⃣ Run the Project  

### Backend (Express Server)
```sh
cd backend
npm run dev
```
Server runs at **`http://localhost:5000`**  

## 🔑 Authentication Flow  

1️⃣ **Admin Login:**  
- Admin enters credentials → Redirected to **Role Selection**  
- Can choose **Admin Panel** or **User Panel**  

2️⃣ **User Login:**  
- User enters credentials → Redirected directly to **User Dashboard**  

📌 **Credentials For Login **  
```json
[
  "username": "admin", "password": "admin123", "role": "admin"
  "username": "user", "password": "user123", "role": "user"
]


**🎯 Developed By:** *Pushkar Sharma* 🚀🔥  
