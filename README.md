# IRCTC-like Railway Management System API

This is a Node.js-based API for a railway management system similar to IRCTC. It allows users to check train availability, book seats, and manage trains (admin-only). The API is built using **Express.js** and **MySQL**.

---

## **Features**

1. **User Authentication**:
   - Register a new user.
   - Log in to get a JWT token for authenticated requests.

2. **Train Management (Admin Only)**:
   - Add new trains with source, destination, and total seats.
   - Update train details (not implemented in this version).

3. **Seat Availability**:
   - Check seat availability between two stations.

4. **Booking Management**:
   - Book seats on a specific train.
   - Get booking details (not implemented in this version).

---

## **Tech Stack**

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: JSON Web Tokens (JWT)
- **API Testing**: Postman

---

## **Setup Instructions**

### **1. Prerequisites**

- Install [Node.js](https://nodejs.org/) (v14 or higher).
- Install [MySQL](https://dev.mysql.com/downloads/installer/).
- Install [Git](https://git-scm.com/).

### **2. Clone the Repository**

```bash
git clone https://github.com/divakarrajput1/api-irctc.git
cd api-irctc
