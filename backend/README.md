install the required dependencies:
```bash
npm install express mongoose cors dotenv
```

Environment Variables**
Create a `.env` file in the root of your back-end folder:
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/cyberaware?retryWrites=true&w=majority
PORT=5000
```

---

### **Running the Back-End**
1. Start the server:
   ```bash
   node server.js
   ```
2. The API will be available at `http://localhost:5000`.
