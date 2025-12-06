import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Lock, User, Monitor, Globe, CreditCard, Mail, Shield } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 max-w-5xl mx-auto">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences.</p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="w-full justify-start h-auto p-0 bg-transparent border-b rounded-none gap-6 overflow-x-auto">
            <TabsTrigger 
              value="general" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-3"
            >
              General
            </TabsTrigger>
            <TabsTrigger 
              value="notifications" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-3"
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger 
              value="billing" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-3"
            >
              Billing
            </TabsTrigger>
            <TabsTrigger 
              value="team" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-3"
            >
              Team Members
            </TabsTrigger>
          </TabsList>

          <div className="mt-6">
            {/* General Tab */}
            <TabsContent value="general" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your photo and personal details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2 text-center sm:text-left">
                      <Button variant="outline" size="sm">Change Avatar</Button>
                      <p className="text-xs text-muted-foreground">
                        JPG, GIF or PNG. Max size of 800K.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" placeholder="Tell us a little about yourself" className="min-h-[100px]" />
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>Manage your language and regional settings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger>
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Timezone</Label>
                      <Select defaultValue="pst">
                        <SelectTrigger>
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                          <SelectItem value="utc">Coordinated Universal Time (UTC)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Email Notifications</CardTitle>
                  <CardDescription>Choose what you want to be notified about.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label className="text-base">New Leads</Label>
                      <p className="text-sm text-muted-foreground">Receive emails when a new lead is assigned to you.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label className="text-base">Deal Updates</Label>
                      <p className="text-sm text-muted-foreground">Get notified when a deal status changes.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label className="text-base">Weekly Reports</Label>
                      <p className="text-sm text-muted-foreground">Receive a weekly summary of your performance.</p>
                    </div>
                    <Switch />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label className="text-base">Marketing Emails</Label>
                      <p className="text-sm text-muted-foreground">Receive news and product updates.</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button>Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Billing Tab */}
            <TabsContent value="billing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Plan</CardTitle>
                  <CardDescription>You are currently on the Pro Plan.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between bg-muted/50 p-4 rounded-lg border">
                    <div className="space-y-1">
                      <p className="font-medium">Pro Plan</p>
                      <p className="text-sm text-muted-foreground">$29/month per user</p>
                    </div>
                    <Button variant="outline">Upgrade Plan</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Manage your payment details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                   <div className="flex items-center gap-4 border p-4 rounded-lg">
                     <div className="h-10 w-16 bg-muted rounded flex items-center justify-center">
                       <CreditCard className="h-6 w-6 text-muted-foreground" />
                     </div>
                     <div className="flex-1">
                       <p className="font-medium">Visa ending in 4242</p>
                       <p className="text-sm text-muted-foreground">Expires 12/24</p>
                     </div>
                     <Button variant="ghost" size="sm">Edit</Button>
                   </div>
                   <Button variant="outline" className="w-full gap-2">
                     <Plus className="h-4 w-4" /> Add Payment Method
                   </Button>
                </CardContent>
              </Card>
            </TabsContent>

             {/* Team Tab */}
             <TabsContent value="team" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>Manage your team and their roles.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { name: "John Doe", email: "john@example.com", role: "Admin" },
                      { name: "Sarah Smith", email: "sarah@example.com", role: "Editor" },
                      { name: "Mike Johnson", email: "mike@example.com", role: "Viewer" },
                    ].map((member, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.email}</p>
                          </div>
                        </div>
                        <Select defaultValue={member.role.toLowerCase()}>
                          <SelectTrigger className="w-[110px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="editor">Editor</SelectItem>
                            <SelectItem value="viewer">Viewer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                   <Button className="gap-2">
                     <Plus className="h-4 w-4" /> Invite Member
                   </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

// Helper for missing icon import in this file specifically
import { Plus } from "lucide-react";
