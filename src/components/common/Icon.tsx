import type { LucideIcon } from 'lucide-react';
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  Bot,
  Brain,
  Briefcase,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileText,
  Filter,
  Gauge,
  Gem,
  Globe,
  GraduationCap,
  HardHat,
  Headphones,
  HeartPulse,
  Landmark,
  LayoutDashboard,
  Layers,
  Lightbulb,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Monitor,
  PenTool,
  Phone,
  Plug,
  Plus,
  Quote,
  Rocket,
  Search,
  Send,
  Server,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sprout,
  Star,
  Store,
  Target,
  TrendingUp,
  Truck,
  Users,
  Wrench,
  X,
  Zap,
} from 'lucide-react';

/**
 * Explicit icon registry.
 *
 * Content data files reference icons by name; importing only the icons that are
 * actually used keeps the bundle small instead of pulling in the whole library.
 */
const registry: Record<string, LucideIcon> = {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  Bot,
  Brain,
  Briefcase,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileText,
  Filter,
  Gauge,
  Gem,
  Globe,
  GraduationCap,
  HardHat,
  Headphones,
  HeartPulse,
  Landmark,
  LayoutDashboard,
  Layers,
  Lightbulb,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Monitor,
  PenTool,
  Phone,
  Plug,
  Plus,
  Quote,
  Rocket,
  Search,
  Send,
  Server,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sprout,
  Star,
  Store,
  Target,
  TrendingUp,
  Truck,
  Users,
  Wrench,
  X,
  Zap,
};

export interface IconProps {
  name: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
  title?: string;
}

export default function Icon({ name, size = 22, className, strokeWidth = 1.9, title }: IconProps) {
  const Component = registry[name] ?? Layers;

  if (title) {
    return (
      <Component size={size} className={className} strokeWidth={strokeWidth} role="img">
        <title>{title}</title>
      </Component>
    );
  }

  return <Component size={size} className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
