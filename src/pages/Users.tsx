import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Truck, Factory, Building2, Shield, Navigation } from "lucide-react";
import farmerField from "@/assets/farmers-working.jpg";
import smartTransport from "@/assets/smart-transport.jpg";
import biogasFacility from "@/assets/biogas-facility.jpg";
import villageLife from "@/assets/village-life.jpg";
import farmerPayment from "@/assets/farmer-payment.jpg";
import { useTranslation } from "../hooks/react-i18next";

export const Users = () => {
    const { t } = useTranslation();
    
    const userTypes = [
        {
            id: "01",
            title: "GauSakhi — Data-based Executive (Field App)",
            subtitle: "गौ सखी ऐप",
            description: "Mobile app for field executives to manage farmers, cattle, and daily collection activities with offline support.",
            image: farmerField,
            features: [
                "Cattle Management: Complete cattle database with RFID tagging, health records, and productivity tracking.",
                "Collection Scheduling: Plan and schedule daily collection routes with GPS navigation and time optimization.",
                "Real-time Tracking: Live location tracking, route optimization, arrival notifications, and collection status updates.",
                "Payment Integration: Instant payment processing with digital receipts, transaction history, and farmer account management.",
                "Quality Assessment: On-site quality checks with photo documentation, moisture content analysis, and grading systems.",
                "Offline Mode: Full app functionality without internet connectivity for remote areas with sync capabilities."
            ],
            gradient: "bg-gradient-to-br from-green-400 to-green-600"
        },
        {
            id: "02",
            title: "BiogasSangh — Cluster Manager App",
            subtitle: "बायोगैस संघ",
            description: "Portal for cluster managers to monitor digestion, manage supply-chain, and oversee operations with real-time analytics.",
            image: smartTransport,
            features: [
                "Supply Chain Oversight: End-to-end visibility of the supply chain from collection to processing with real-time status updates.",
                "Digester Monitoring: Live monitoring of digester performance, gas production rates, and maintenance schedules.",
                "Resource Management: Comprehensive resource management with inventory tracking, equipment maintenance, and staff scheduling.",
                "Performance Analytics: Advanced analytics dashboard with production metrics, efficiency reports, and trend analysis.",
                "Quality Control: Multi-stage quality control with automated testing protocols, batch tracking, and compliance reporting.",
                "Stakeholder Communication: Integrated communication tools with farmers, transporters, and processing facilities for seamless coordination."
            ],
            gradient: "bg-gradient-to-br from-blue-400 to-blue-600"
        },
        {
            id: "03",
            title: "ShudhiDoot — Purification Unit App",
            subtitle: "शुद्धि दूत",
            description: "App for purification unit operators to monitor gas quality, manage orders, and track plant operations.",
            image: biogasFacility,
            features: [
                "Gas Quality Monitoring: Real-time monitoring of gas purity, methane content, and quality parameters with automated alerts.",
                "Plant Operations: Comprehensive plant management with equipment status, maintenance schedules, and operational efficiency tracking.",
                "Order Management: Complete order lifecycle management from processing requests to delivery coordination with customer communication.",
                "Quality Control: Multi-stage quality assurance with automated testing, batch certification, and compliance documentation.",
                "Performance Analytics: Advanced analytics for production optimization, efficiency monitoring, and predictive maintenance.",
                "Safety Management: Integrated safety protocols with emergency procedures, incident reporting, and compliance tracking."
            ],
            gradient: "bg-gradient-to-br from-orange-400 to-orange-600"
        },
        {
            id: "04",
            title: "UrjaVyapar — Corporate Sales & Inventory App",
            subtitle: "ऊर्जा व्यापार",
            description: "Sales platform for managing CBG inventory, customer orders, invoicing, and market pricing with comprehensive tracking.",
            image: villageLife,
            features: [
                "Inventory Management: Real-time inventory tracking with automated stock alerts, batch management, and expiry monitoring.",
                "Customer Management: Comprehensive customer database with order history, credit management, and relationship tracking.",
                "Order Processing: Streamlined order management from quotation to delivery with automated workflows and status tracking.",
                "Invoicing Management: Automated invoicing with customizable templates, tax calculations, and payment tracking.",
                "Market Analytics: Real-time market analysis with pricing trends, demand forecasting, and competitive intelligence.",
                "Sales Reporting: Comprehensive sales analytics with performance metrics, revenue tracking, and profitability analysis.",
                "Logistics Coordination: Integrated logistics management with delivery scheduling, route optimization, and tracking capabilities.",
                "Payment Processing: Secure payment gateway integration with multiple payment options and automated reconciliation.",
                "Compliance Management: Regulatory compliance tracking with automated reporting, documentation, and audit trails."
            ],
            gradient: "bg-gradient-to-br from-red-400 to-red-600"
        },
        {
            id: "05",
            title: "Admin Portal",
            subtitle: "SAUBHAGYA Admin",
            description: "Central oversight and user management, devices, audit logs, revenue & carbon accounting.",
            image: farmerPayment,
            features: [
                "User management (CRUD): admin, cluster_manager, data_operator",
                "Device registry (RFID) of cattle, CG, sensors, GPS",
                "Audit trail: transactional details and operator logs",
                "Reports: revenue, carbon credits, compliance reports",
                "Offer Mgt: CBG daily revenue, dashboard stats",
                "Predictive analytics: expansion trends, revenue projections",
                "Compliance & audit reports"
            ],
            gradient: "bg-gradient-to-br from-purple-400 to-purple-600"
        },
        {
            id: "06",
            title: "Transporter (Mobile App)",
            subtitle: "परिवहन हैंडलर",
            description: "Manage pickup/delivery scheduling with GPS tracking and offline support for rural routes.",
            image: smartTransport,
            features: [
                "Pickup/drop-off scheduling with real-time",
                "GPS-based route tracking",
                "Delivery notifications with photo + messaging",
                "Offline routes for rural routes"
            ],
            gradient: "bg-gradient-to-br from-teal-400 to-teal-600"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <section className="pt-20 pb-16 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        {t('users.title')}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-600">
                        {t('users.subtitle')}
                    </p>
                    <p className="text-lg max-w-4xl mx-auto text-gray-600 leading-relaxed">
                        {t('users.description')}
                    </p>
                </div>
            </section>

            {/* User Cards Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {userTypes.map((user, index) => (
                            <Card key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                                {/* Image Header */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={user.image}
                                        alt={user.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute top-4 right-4">
                                        <div className={`w-12 h-12 ${user.gradient} rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                                            {user.id}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="text-xl font-bold mb-1">{user.title}</h3>
                                        <p className="text-sm opacity-90">{user.subtitle}</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {user.description}
                                    </p>

                                    {/* Key Features */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <h4 className="font-semibold text-gray-900">{t('users.keyFeatures')}</h4>
                                        </div>
                                        <ul className="space-y-3">
                                            {user.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-sm text-gray-600 leading-relaxed">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Learn More Button */}
                                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors">
                                        {t('users.learnMore')}
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            {t('users.readyToJoin')}
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {t('users.readyToJoinDesc')}
                        </p>
                        <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                            {t('users.getStartedToday')}
                        </Button>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Users;