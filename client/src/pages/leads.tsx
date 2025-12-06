import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  MoreHorizontal, 
  Plus, 
  Search, 
  Filter,
  Download,
  Trash2,
  Edit,
  Mail,
  Phone
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Mock Data
const allLeads = [
  { id: "LD-001", name: "Sarah Smith", email: "sarah@techflow.com", company: "TechFlow Inc.", status: "New", value: "$12,000", source: "Website", lastContact: "2 mins ago" },
  { id: "LD-002", name: "Michael Johnson", email: "m.johnson@global.com", company: "Global Dynamics", status: "Contacted", value: "$8,500", source: "LinkedIn", lastContact: "1 hour ago" },
  { id: "LD-003", name: "Emily Davis", email: "edavis@creative.io", company: "Creative Studio", status: "Qualified", value: "$24,000", source: "Referral", lastContact: "3 hours ago" },
  { id: "LD-004", name: "David Wilson", email: "dwilson@future.sys", company: "Future Systems", status: "Proposal", value: "$45,000", source: "Conference", lastContact: "5 hours ago" },
  { id: "LD-005", name: "Jessica Brown", email: "jess@marketpro.net", company: "Marketing Pro", status: "Negotiation", value: "$18,200", source: "Website", lastContact: "1 day ago" },
  { id: "LD-006", name: "Robert Taylor", email: "robert@nexus.com", company: "Nexus Corp", status: "New", value: "$6,000", source: "Cold Call", lastContact: "1 day ago" },
  { id: "LD-007", name: "Jennifer Lee", email: "jlee@innovate.co", company: "Innovate Co", status: "Won", value: "$32,000", source: "LinkedIn", lastContact: "2 days ago" },
  { id: "LD-008", name: "William Clark", email: "william@alpha.grp", company: "Alpha Group", status: "Lost", value: "$15,000", source: "Website", lastContact: "3 days ago" },
  { id: "LD-009", name: "Elizabeth Hall", email: "liz@beta.ind", company: "Beta Industries", status: "Qualified", value: "$28,500", source: "Referral", lastContact: "3 days ago" },
  { id: "LD-010", name: "James Moore", email: "jmoore@gamma.sol", company: "Gamma Solutions", status: "Contacted", value: "$9,200", source: "Website", lastContact: "4 days ago" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "New": return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300";
    case "Contacted": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";
    case "Qualified": return "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300";
    case "Proposal": return "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300";
    case "Negotiation": return "bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300";
    case "Won": return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
    case "Lost": return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
    default: return "bg-gray-100 text-gray-700";
  }
};

import { useToast } from "@/hooks/use-toast";
import { LeadDialog } from "@/components/leads/lead-dialog";

export default function LeadsPage() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredLeads = allLeads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "All" || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleExport = () => {
    toast({
      title: "Export Started",
      description: "Your leads list is being exported to CSV...",
    });
    
    // Simulate download delay
    setTimeout(() => {
      toast({
        title: "Export Complete",
        description: "Leads_Export_2024.csv has been downloaded.",
      });
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-display font-bold tracking-tight">Leads Management</h1>
            <p className="text-muted-foreground">Track, organize, and nurture your potential customers.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2" onClick={handleExport}>
              <Download className="w-4 h-4" /> Export
            </Button>
            <LeadDialog />
          </div>
        </div>

        <Card className="flex-1">
          <CardHeader className="pb-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="relative w-full md:max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search leads by name, company, or email..."
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium hidden sm:inline">Filter by:</span>
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Statuses</SelectItem>
                    <SelectItem value="New">New</SelectItem>
                    <SelectItem value="Contacted">Contacted</SelectItem>
                    <SelectItem value="Qualified">Qualified</SelectItem>
                    <SelectItem value="Proposal">Proposal</SelectItem>
                    <SelectItem value="Negotiation">Negotiation</SelectItem>
                    <SelectItem value="Won">Won</SelectItem>
                    <SelectItem value="Lost">Lost</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </TableHead>
                    <TableHead>Lead Name</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Last Contact</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLeads.length > 0 ? (
                    filteredLeads.map((lead) => (
                      <TableRow key={lead.id}>
                        <TableCell>
                          <input type="checkbox" className="rounded border-gray-300" />
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span className="font-medium">{lead.name}</span>
                            <span className="text-xs text-muted-foreground">{lead.email}</span>
                          </div>
                        </TableCell>
                        <TableCell>{lead.company}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={cn("border-0", getStatusColor(lead.status))}>
                            {lead.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{lead.value}</TableCell>
                        <TableCell>{lead.source}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">{lead.lastContact}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="gap-2">
                                <Edit className="w-4 h-4" /> Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="gap-2">
                                <Mail className="w-4 h-4" /> Email
                              </DropdownMenuItem>
                              <DropdownMenuItem className="gap-2">
                                <Phone className="w-4 h-4" /> Call
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive gap-2">
                                <Trash2 className="w-4 h-4" /> Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={8} className="h-24 text-center">
                        No leads found matching your criteria.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
              <div className="flex-1 text-sm text-muted-foreground">
                Showing {filteredLeads.length} of {allLeads.length} leads
              </div>
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm" disabled>Next</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
