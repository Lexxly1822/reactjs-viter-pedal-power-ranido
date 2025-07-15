import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import { Link } from "react-router-dom";
import CardEvents from "../partials/CardEvents";
import CardSection from "../partials/CardSection";
import CardCycling from "../partials/CardCycling";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow">
          <div className="relative">
            {/* Hero Section */}
            <div className="relative h-screen">
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <img
                src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
                alt="Cycling hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                    Ride Beyond Limits
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-8">
                    Discover the world on two wheels with our expert guides and
                    community
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <CardSection
                      Link={"/road-biking"}
                      bgColor={"bg-green-600 "}
                      text={"Road Biking "}
                    />
                    <CardSection
                      Link={"/road-biking"}
                      bgColor={"bg-blue-600 "}
                      text={"Mountain Biking "}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Sections */}
            <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Explore Cycling Disciplines
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                  Whether you prefer smooth pavement or rugged trails, we've got
                  you covered
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <CardCycling
                  img={
                    "https://images.unsplash.com/photo-1531045535792-b515d59c3d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
                  }
                  title={"Road Biking "}
                  description={"Speed, endurance, and the open road "}
                  link={"/road-biking"}
                  textColor={"text-green-700 "}
                />
                <CardCycling
                  img={
                    "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
                  }
                  title={"Mountain Biking "}
                  description={"Trails, adrenaline, and outdoor adventure "}
                  link={"/mountain-biking"}
                  textColor={"text-blue-700 "}
                />
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-gray-900 text-white py-16">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Upcoming Cycling Events
                  </h2>
                  <p className="mt-4 max-w-2xl mx-auto text-gray-400">
                    Join our community rides and competitions
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <CardEvents
                    img={
                      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80 "
                    }
                    title={"Alpine Challenge "}
                    date={"June 15-17, 2023 "}
                    country={"Swiss Alps "}
                    bgColor={"bg-green-900"}
                    text={"Road"}
                    textColor={"text-green-300"}
                  />
                  <CardEvents
                    img={
                      "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80 "
                    }
                    title={"Trail Masters "}
                    date={"July 8-9, 2023 "}
                    country={"Moab, Utah "}
                    bgColor={"bg-blue-900"}
                    text={"Mountain"}
                    textColor={"text-blue-300"}
                  />
                  <CardEvents
                    img={
                      "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80 "
                    }
                    title={"Urban Sprint "}
                    date={"August 5, 2023 "}
                    country={"New York City"}
                    bgColor={"bg-green-900"}
                    text={"Road"}
                    textColor={"text-green-300"}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
