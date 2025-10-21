import { Card } from "@/components/ui/card";
import { Scale, TruckIcon, Factory, Banknote } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/react-i18next";

const DignifiedEarning = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const steps = [
    { icon: Scale, stepKey: "step1" },
    { icon: TruckIcon, stepKey: "step2" },
    { icon: Factory, stepKey: "step3" },
    { icon: Banknote, stepKey: "step4" },
  ];

  return (
    <section className="pt-20 pb-14 bg-transparent">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4 leading-tight">
            {t("howItWorks.taglines.dignifiedEarning")}
          </h2>

          <p className="text-lg md:text-xl text-black mt-4">
            {t("howItWorks.processDescription")}
          </p>
        </div>

        {/* Process Overview */}
        <div className="text-center mb-6">
          <h3 className="text-3xl md:text-4xl font-bold text-black">
            {t("howItWorks.processOverview")}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index}>
              <Card className="bg-white/20 backdrop-blur-sm rounded-xl border border-white/40 shadow-lg hover:shadow-xl hover:bg-white/30 transition-all duration-300 p-6 text-center cursor-pointer hover:border-primary/50">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-black mb-3">
                  {t("common.step")} {index + 1}
                </h4>
                <div className="border-t border-black/20 pt-3">
                  <p className="text-sm text-black leading-relaxed">
                    {t(`howItWorks.steps.${step.stepKey}.shortDescription`)}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-lg text-black italic">
            {t("howItWorks.empoweringFarmers")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DignifiedEarning;