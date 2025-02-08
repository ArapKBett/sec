const mongoose = require('mongoose');
const Blog = require('./models/Blog');
const Quiz = require('./models/Quiz');
const User = require('./models/User');
const dotenv = require('dotenv');

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Sample data
const blogs = [
  {
    title: "Introduction to Cybersecurity",
    content: "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks...",
    summary: "Learn the basics of cybersecurity and why it's important.",
    author: "Admin",
  },
  {
    title: "Common Types of Cyber Attacks",
    content: "Phishing, malware, ransomware, and DDoS attacks are some of the most common cyber threats...",
    summary: "Understand the different types of cyber attacks and how to protect yourself.",
    author: "Admin",
  },
];

const quizzes = [
  {
    blogId: null, // Will be updated after blogs are created
    questions: [
      {
        text: "What is the primary goal of cybersecurity?",
        options: [
          { text: "To protect data and systems", isCorrect: true },
          { text: "To hack into systems", isCorrect: false },
          { text: "To create viruses", isCorrect: false },
        ],
      },
      {
        text: "Which of the following is a common cyber attack?",
        options: [
          { text: "Phishing", isCorrect: true },
          { text: "Baking", isCorrect: false },
          { text: "Gardening", isCorrect: false },
        ],
      },
    ],
  },
];

const users = [
  {
    username: "john_doe",
    email: "john.doe@example.com",
    password: "securepassword123",
    quizScores: [],
  },
];

// Seed function
const seedDatabase = async () => {
  try {
    // Clear existing data
    await Blog.deleteMany({});
    await Quiz.deleteMany({});
    await User.deleteMany({});

    // Insert blogs
    const createdBlogs = await Blog.insertMany(blogs);
    console.log('Blogs inserted:', createdBlogs);

    // Update quiz blogId with the first blog's ID
    quizzes[0].blogId = createdBlogs[0]._id;

    // Insert quizzes
    const createdQuizzes = await Quiz.insertMany(quizzes);
    console.log('Quizzes inserted:', createdQuizzes);

    // Update user quizScores with the first quiz's ID
    users[0].quizScores.push({ quizId: createdQuizzes[0]._id, score: 2 });

    // Insert users
    const createdUsers = await User.insertMany(users);
    console.log('Users inserted:', createdUsers);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();
