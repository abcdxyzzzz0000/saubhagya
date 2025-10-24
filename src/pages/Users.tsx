import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users as UsersIcon, Home, Truck, Factory } from "lucide-react";
import farmerField from "@/assets/farmers-working.jpg";
import smartTransport from "@/assets/smart-transport.jpg";
import biogasFacility from "@/assets/biogas-facility.jpg";
import villageLife from "@/assets/village-life.jpg";
import { useTranslation } from "../hooks/react-i18next";

export const Users = () => {
    const { t } = useTranslation();
    
    // Simplified user types with core benefits
    const userTypes = [
        {
            icon: UsersIcon,
            type: t('users.userTypes.farmers.type'),
            tagline: t('users.userTypes.farmers.tagline'),
            cta: t('users.userTypes.farmers.cta'),
            image: farmerField,
            bgColor: "bg-green-50"
        },
        {
            icon: Home,
            type: t('users.userTypes.gaushalas.type'),
            tagline: t('users.userTypes.gaushalas.tagline'),
            cta: t('users.userTypes.gaushalas.cta'),
            image: villageLife,
            bgColor: "bg-yellow-50"
        },
        {
            icon: Truck,
            type: t('users.userTypes.transporters.type'),
            tagline: t('users.userTypes.transporters.tagline'),
            cta: t('users.userTypes.transporters.cta'),
            image: smartTransport,
            bgColor: "bg-orange-50"
        },
        {
            icon: Factory,
            type: t('users.userTypes.cbgPlants.type'),
            tagline: t('users.userTypes.cbgPlants.tagline'),
            cta: t('users.userTypes.cbgPlants.cta'),
            image: biogasFacility,
            bgColor: "bg-amber-50"
        }
    ];

    return (
        <div className="min-h-screen bg-transparent">
            {/* Header Section */}
            <section className="pt-20 pb-16 bg-transparent">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">
                        {t('users.title')}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-green-700">
                        {t('users.subtitle')}
                    </p>
                    {/* NEW OPENING LINE */}
                    <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-700 leading-relaxed mt-3 mb-10">
                        {t('users.newDescription')}
                    </p>
                </div>
            </section>

            {/* Simplified User Cards */}
            <section className="py-16 bg-transparent">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {userTypes.map((user, index) => (
                            <Card key={index} className={`${user.bgColor} rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden`}>
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={user.image}
                                        alt={user.type}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center shadow-lg">
                                            <user.icon className="w-6 h-6 text-green-700" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                                        {user.type}
                                    </h3>
                                    <p className="text-base text-gray-700 mb-6 leading-relaxed">
                                        {user.tagline}
                                    </p>
                                    <Button className="w-full rounded-full px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium transition-all active:scale-95">
                                        {user.cta}
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW SECTION: Who Trusts Us */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-3">
                            {t('users.whoTrustsUs.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('users.whoTrustsUs.subtitle')}
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm p-8">
                        <div className="flex justify-center flex-wrap gap-8 items-center">
                            {/* Partner 1: Panchayats */}
                            <div className="flex flex-col items-center opacity-80 hover:opacity-100 transition-all">
                                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-3">
                                    <span className="text-3xl">🏛️</span>
                                </div>
                                <p className="text-sm font-medium text-gray-700">{t('users.whoTrustsUs.partners.panchayats')}</p>
                            </div>

                            {/* Partner 2: Cooperatives */}
                            <div className="flex flex-col items-center opacity-80 hover:opacity-100 transition-all">
                                <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                                    <span className="text-3xl">🤝</span>
                                </div>
                                <p className="text-sm font-medium text-gray-700">{t('users.whoTrustsUs.partners.cooperatives')}</p>
                            </div>

                            {/* Partner 3: CBG Partners */}
                            <div className="flex flex-col items-center opacity-80 hover:opacity-100 transition-all">
                                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                                    <span className="text-3xl">⚡</span>
                                </div>
                                <p className="text-sm font-medium text-gray-700">{t('users.whoTrustsUs.partners.cbgPartners')}</p>
                            </div>

                            {/* Partner 4: Farmer Groups */}
                            <div className="flex flex-col items-center opacity-80 hover:opacity-100 transition-all">
                                <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                                    <span className="text-3xl">👨‍🌾</span>
                                </div>
                                <p className="text-sm font-medium text-gray-700">{t('users.whoTrustsUs.partners.farmerGroups')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-transparent">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-lg">
                        <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
                            {t('users.readyToJoin')}
                        </h2>
                        <p className="text-white/95 mb-8 leading-relaxed drop-shadow-md">
                            {t('users.readyToJoinDesc')}
                        </p>
                        <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-all active:scale-95">
                            {t('users.getStartedToday')}
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Users;
