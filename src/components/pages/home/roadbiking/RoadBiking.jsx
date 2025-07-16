import React from "react";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import CardFeaturesRoad from "../../partials/CardFeaturesRoad";
import CardGear from "../../partials/CardGear";
import CardTrainingTips from "../../partials/CardTrainingTips";

const RoadBiking = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow">
          <div>
            {/* Hero Section */}
            <div className="relative h-96">
              <div className="absolute inset-0 bg-green-900 opacity-60"></div>
              <img
                src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
                alt="Road biking hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Road Biking
                  </h1>
                  <p className="text-xl text-white max-w-2xl mx-auto">
                    Speed, endurance, and the freedom of the open road
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
              {/* Featured Routes */}
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Featured Road Routes
                  </h2>
                  <div className="w-20 h-1 bg-green-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <CardFeaturesRoad
                    img={"/img/roadbiking1.webp "}
                    title={" Coastal Highway "}
                    miles={" 75 miles"}
                    level={"Intermediate "}
                    ft={"1,200 ft "}
                  />
                  <CardFeaturesRoad
                    img={"img/roadbiking2.webp"}
                    title={" Mountain Pass "}
                    miles={" 42 miles"}
                    level={"Advanced "}
                    ft={"5,800 ft "}
                  />
                  <CardFeaturesRoad
                    img={"img/roadbiking3.webp "}
                    title={" Countryside Loop "}
                    miles={"30 miles "}
                    level={"Beginner "}
                    ft={"500 ft "}
                  />
                </div>
              </div>

              {/* Gear Guide */}
              <div className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-20">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Essential Road Biking Gear
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Having the right equipment can make all the difference in
                      your riding experience and safety.
                    </p>
                    <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition">
                      View Full Gear Guide
                    </button>
                  </div>

                  <div className="md:w-1/2">
                    <div className="grid grid-cols-2 gap-4">
                      <CardGear title={"Helmet "} />
                      <CardGear title={"Bike Shoes"} />
                      <CardGear title={"Jersey"} />
                      <CardGear title={"Bottles "} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Training Tips */}
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Training Tips
                  </h2>
                  <div className="w-20 h-1 bg-green-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <CardTrainingTips
                    number={"01"}
                    title={"Cadence Matters "}
                    description={
                      " Aim for a cadence of 80-100 RPM to improve efficiency and reduce fatigue. Use your gears to maintain this range on different terrain"
                    }
                  />
                  <CardTrainingTips
                    number={"02"}
                    title={"Fuel Properly "}
                    description={
                      " Consume 30-60g of carbohydrates per hour on rides longer than 90 minutes to maintain energy levels."
                    }
                  />

                  <CardTrainingTips
                    number={"03"}
                    title={"Group Riding"}
                    description={
                      " When drafting, maintain a consistent speed and avoid sudden braking. Communicate clearly with hand signals and verbal calls."
                    }
                  />
                  <CardTrainingTips
                    number={"04"}
                    title={"Hill Climbing"}
                    description={
                      "Shift before you need to, stay seated on moderate grades, and focus on steady breathing and pedal strokes."
                    }
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

export default RoadBiking;
