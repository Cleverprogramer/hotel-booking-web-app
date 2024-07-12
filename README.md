# 🏨 Hotel Booking

## Description
**Hotel Booking** is a comprehensive web application designed to facilitate the booking of hotel appointments. Users can browse available rooms, make reservations, and manage their bookings with ease. This application aims to provide a seamless and user-friendly experience for both guests and hotel administrators.

## Features
- 🛏️ **Browse Available Rooms**: Explore a variety of rooms with detailed descriptions and images. Filter by room type, price, and amenities to find the perfect stay.
- 📅 **Make Reservations**: Book your preferred room with a simple and intuitive interface. View room availability in real-time.
- 📝 **Manage Bookings**: View and modify your existing bookings effortlessly. Receive email confirmations and reminders.
- 🔐 **User Authentication and Profile Management**: Secure login and profile management for a personalized experience. Integration with GitHub and Google for quick sign-ins.
- 📋 **Admin Panel**: Manage bookings, room listings, and user accounts with administrative access.
- 💬 **Reviews and Ratings**: Leave reviews and rate your stay. View ratings and feedback from other guests.
- 🌐 **Multi-language Support**: Accessible to users from different regions with multi-language support.
- 🧹 **Housekeeping Requests**: Request additional services like cleaning, laundry, or room service directly from the app.
- 💳 **Secure Payments**: Integrated payment gateways for secure and hassle-free transactions.
- 📱 **Responsive Design**: Fully responsive design ensures a seamless experience on both desktop and mobile devices.

## Technologies Used
- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) **Next.js**: React framework for server-rendered applications.
- ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white) **Supabase**: Backend as a Service (BaaS) for the database and authentication.
- ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) **Prisma ORM**: Next-generation ORM for database access.
- ![NextAuth](https://img.shields.io/badge/NextAuth.js-ffffff?style=for-the-badge&logo=nextdotjs&logoColor=black) **NextAuth.js**: Authentication for Next.js applications.
- ![Next.js Server Actions](https://img.shields.io/badge/Next.js_Server_Actions-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) **Next.js Server Actions**: Server-side functionality for enhanced performance.
- ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white) **Cloudinary**: For image hosting and optimization.

## Installation Instructions
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/hotel-booking.git
    ```
2. Navigate to the project directory:
    ```bash
    cd hotel-booking
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables:
    Create a `.env` file in the root directory and add the following variables:
    ```env
    # Database connection
    DATABASE_URL=

    # Authentication
    AUTH_SECRET=
    GITHUB_CLIENT_SECRET=
    GITHUB_CLIENT_ID=
    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=

    # Cloudinary
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET_KEY=
    ```
5. Run the application:
    ```bash
    npm run dev
    ```

## Usage Instructions
- **Browse Rooms**: Visit the home page to explore available rooms. Use filters to narrow down your search.
- **Make a Reservation**: Click on a room to book it, following the prompts to complete your reservation.
- **Manage Bookings**: Log in to your account and navigate to the "My Bookings" section to view and modify your bookings.
- **Admin Access**: Log in with administrative credentials to access the admin panel for managing rooms and bookings.

## Adding the Favicon
1. Place the `favicon.ico` file in the `public` directory of your project.
2. Add the following line to your `pages/_document.js` file to include the favicon:
    ```jsx
    import { Html, Head, Main, NextScript } from 'next/document'

    export default function Document() {
      return (
        <Html>
          <Head>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
    ```

## Contributing Guidelines
- Fork the repository.
- Create a new branch for your feature or bugfix.
- Commit your changes with a descriptive message.
- Create a pull request to the main branch.

## License
This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/). See the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.

## Additional Information
For any queries or additional information, please contact us at [cleverprogrammer.com@gmail.com].

