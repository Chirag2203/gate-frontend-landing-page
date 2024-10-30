import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface DrillsCardProps {
  drillName: string;
  drillDescription: string;
  Logo: ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;
  drillStats: {
    statsName: string;
    statsLogo: ForwardRefExoticComponent<
      LucideProps & RefAttributes<SVGSVGElement>
    >;
  }[];
  drillLearners: number;
  drillLink: string;
}

export interface DrillsStatsProps {
  statsData: {
    statsName: string;
    statsValue: string | number;
    statsLogo: ForwardRefExoticComponent<
      LucideProps & RefAttributes<SVGSVGElement>
    >;
  }[];
}

interface DrillDetail {
    detailLogo:  ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;
    detailName: string;
}

interface DrillFeature {
    featureLogo:  ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;
    featureName: string;
    featureDescription: string;
}

export interface DrillIntroData {
    Logo:   ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;
    drillName: string;
    drillDescription: string;
    drillDetails: DrillDetail[];
    drillWorking: string;
    drillFeatures: DrillFeature[];
}
