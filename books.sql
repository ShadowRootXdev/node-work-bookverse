-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2025 at 09:52 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `book`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `title` varchar(30) NOT NULL,
  `author` text NOT NULL,
  `genre` text NOT NULL,
  `instock` tinyint(1) NOT NULL,
  `price` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `genre`, `instock`, `price`, `createdAt`) VALUES
(5, 'The middle of realities', 'James ', 'Literature', 0, 100, '2025-05-22 10:16:38'),
(12, 'The Art of War', 'Sun Tzu', 'Philosophy', 1, 200, '2025-05-30 13:03:50'),
(13, 'The Art of War', 'Sun Tzu', 'Philosophy', 1, 15, '2025-05-30 13:07:11'),
(14, '1984', 'George Orwell', 'Dystopian', 1, 13, '2025-05-30 13:07:11'),
(15, 'To Kill a Mockingbird', 'Harper Lee', 'Classic', 0, 10, '2025-05-30 13:07:11'),
(16, 'Clean Code', 'Robert C. Martin', 'Programming', 1, 36, '2025-05-30 13:07:11'),
(17, 'The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 1, 19, '2025-05-30 13:07:11'),
(18, 'The Pragmatic Programmer', 'Andrew Hunt', 'Programming', 1, 42, '2025-05-30 13:08:13'),
(19, 'A Brief History of Time', 'Stephen Hawking', 'Science', 1, 15, '2025-05-30 13:08:13'),
(20, 'Pride and Prejudice', 'Jane Austen', 'Romance', 1, 10, '2025-05-30 13:08:13'),
(21, 'Atomic Habits', 'James Clear', 'Self-Help', 1, 22, '2025-05-30 13:08:13'),
(22, 'Thinking, Fast and Slow', 'Daniel Kahneman', 'Psychology', 1, 24, '2025-05-30 13:08:13'),
(23, 'Brave New World', 'Aldous Huxley', 'Dystopian', 0, 11, '2025-05-30 13:08:13'),
(24, 'Dune', 'Frank Herbert', 'Sci-Fi', 1, 18, '2025-05-30 13:08:13'),
(25, 'The Catcher in the Rye', 'J.D. Salinger', 'Classic', 0, 14, '2025-05-30 13:08:13'),
(26, 'Deep Work', 'Cal Newport', 'Productivity', 1, 20, '2025-05-30 13:08:13'),
(27, 'The Lean Startup', 'Eric Ries', 'Business', 1, 27, '2025-05-30 13:08:13'),
(28, 'Zero to One', 'Peter Thiel', 'Business', 1, 23, '2025-05-30 13:09:18'),
(29, 'The 48 Laws of Power', 'Robert Greene', 'Self-Help', 1, 19, '2025-05-30 13:09:18'),
(30, 'The Power of Now', 'Eckhart Tolle', 'Spirituality', 1, 15, '2025-05-30 13:09:18'),
(31, 'The 7 Habits of Highly Effecti', 'Stephen R. Covey', 'Self-Help', 1, 19, '2025-05-30 13:09:18'),
(32, 'Rich Dad Poor Dad', 'Robert T. Kiyosaki', 'Finance', 1, 16, '2025-05-30 13:09:18'),
(33, 'Born a Crime', 'Trevor Noah', 'Biography', 1, 20, '2025-05-30 13:09:18'),
(34, 'Outliers', 'Malcolm Gladwell', 'Psychology', 0, 23, '2025-05-30 13:09:18'),
(35, 'To Kill a Mockingbird', 'Harper Lee', 'Classic', 1, 13, '2025-05-30 13:09:18'),
(36, 'The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 1, 14, '2025-05-30 13:09:18'),
(37, 'Harry Potter and the Philosoph', 'J.K. Rowling', 'Fantasy', 1, 25, '2025-05-30 13:09:18'),
(38, 'The Alchemist', 'Paulo Coelho', 'Fiction', 0, 14, '2025-05-30 13:09:18'),
(39, 'Man\'s Search for Meaning', 'Viktor E. Frankl', 'Philosophy', 1, 16, '2025-05-30 13:09:18'),
(40, 'Start With Why', 'Simon Sinek', 'Business', 1, 20, '2025-05-30 13:09:18'),
(41, 'The Art of War', 'Sun Tzu', 'Strategy', 1, 11, '2025-05-30 13:09:18'),
(42, '1984', 'George Orwell', 'Dystopian', 1, 11, '2025-05-30 13:09:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
