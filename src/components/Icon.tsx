import {
  ScanLine, Users, IdCard, QrCode, Mail, MessageCircle, Send, Brain, Mic, CalendarDays, BarChart3,
  Link2, ShieldCheck, KeyRound, Lock, Globe, Webhook, Code2, Upload, Download, Search, Tag, Merge,
  Archive, Ban, MapPin, Zap, Building2, Briefcase, Phone, Layers, Settings, Check, FileText, Clock,
  Sparkles, Eye, Bell, Smartphone, BookOpen, HelpCircle, IndianRupee, Palette, Server, type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/content/types";

const MAP: Record<IconName, LucideIcon> = {
  scan: ScanLine, users: Users, card: IdCard, qr: QrCode, mail: Mail, message: MessageCircle, send: Send,
  brain: Brain, mic: Mic, calendar: CalendarDays, chart: BarChart3, link: Link2, shield: ShieldCheck,
  key: KeyRound, lock: Lock, globe: Globe, webhook: Webhook, code: Code2, upload: Upload, download: Download,
  search: Search, tag: Tag, merge: Merge, archive: Archive, ban: Ban, map: MapPin, zap: Zap,
  building: Building2, briefcase: Briefcase, phone: Phone, layers: Layers, settings: Settings, check: Check,
  file: FileText, clock: Clock, sparkles: Sparkles, eye: Eye, bell: Bell, smartphone: Smartphone,
  book: BookOpen, help: HelpCircle, rupee: IndianRupee, palette: Palette, server: Server,
};

export function Icon({ name, className = "size-5" }: { name?: IconName; className?: string }) {
  const C = MAP[name ?? "sparkles"] ?? Sparkles;
  return <C className={className} aria-hidden="true" />;
}
