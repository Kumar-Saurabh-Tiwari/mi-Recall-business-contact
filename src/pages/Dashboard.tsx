import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Building2, Camera, Mail, Pencil, Phone, ScanLine, Search } from "lucide-react";
import { contacts, initials, scanPreview, type Contact } from "@/data/contacts";

const Dashboard = () => {
  const navigate = useNavigate();
  const [scanOpen, setScanOpen] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanReady, setScanReady] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState<Contact | null>(null);

  useEffect(() => {
    if (!scanOpen) {
      setScanProgress(0);
      setScanReady(false);
      return;
    }

    setScanProgress(12);
    setScanReady(false);
    const t1 = window.setTimeout(() => setScanProgress(46), 320);
    const t2 = window.setTimeout(() => setScanProgress(78), 720);
    const t3 = window.setTimeout(() => {
      setScanProgress(100);
      setScanReady(true);
    }, 1100);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [scanOpen]);

  useEffect(() => {
    setDraft(selectedContact);
    setIsEditing(false);
  }, [selectedContact]);

  const handleScanClick = () => {
    setScanOpen(true);
  };

  const handleRescan = () => {
    setScanOpen(false);
    window.setTimeout(() => setScanOpen(true), 60);
  };

  const handleEditChange = (key: keyof Contact, value: string) => {
    setDraft((prev) => (prev ? { ...prev, [key]: value } : prev));
  };

  const handleCreateFromScan = () => {
    setSelectedContact(scanPreview);
    setDraft(scanPreview);
    setIsEditing(true);
    setScanOpen(false);
    navigate(`/contacts/${encodeURIComponent(scanPreview.email)}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container pt-28 pb-20">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm text-gold uppercase tracking-widest mb-2">Your Vault</p>
            <h1 className="text-3xl md:text-4xl font-bold">Good evening, Jane.</h1>
            <p className="text-muted-foreground mt-1">You have {contacts.length} contacts in your vault.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: "Total Contacts", value: "128" },
            { label: "This Week", value: "12" },
            { label: "Synced to CRM", value: "98%" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-6">
              <div className="text-sm text-muted-foreground">{s.label}</div>
              <div className="text-3xl font-bold mt-2 text-gradient-gold">{s.value}</div>
            </div>
          ))}
        </div>

        {/* Recent contacts */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border">
            <div>
              <h2 className="text-lg font-semibold">Recent Contacts</h2>
              <p className="text-sm text-muted-foreground">Latest cards added to your vault.</p>
            </div>
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search contacts..." className="pl-9" />
            </div>
          </div>

          <ul className="divide-y divide-border">
            {contacts.map((c) => (
              <li key={c.email}>
                <button
                  type="button"
                  onClick={() => navigate(`/contacts/${encodeURIComponent(c.email)}`)}
                  className={`w-full text-left p-5 flex flex-col md:flex-row md:items-center gap-4 transition-colors ${
                    selectedContact?.email === c.email ? "bg-secondary/60" : "hover:bg-secondary/40"
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center text-primary-foreground font-semibold text-sm shrink-0">
                      {initials(c.name)}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold truncate">{c.name}</div>
                      <div className="text-sm text-muted-foreground truncate">{c.role}</div>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground min-w-0 flex-1">
                    <Building2 className="w-4 h-4 text-gold shrink-0" />
                    <span className="truncate">{c.company}</span>
                  </div>
                  <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground min-w-0 flex-1">
                    <Mail className="w-4 h-4 text-gold shrink-0" />
                    <span className="truncate">{c.email}</span>
                  </div>
                  <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                    <Phone className="w-4 h-4 text-gold" />
                    <span>{c.phone}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {selectedContact ? (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <p className="text-sm text-gold uppercase tracking-widest">Entry Detail</p>
                  <h3 className="text-2xl font-semibold mt-2">{selectedContact.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {selectedContact.role} · {selectedContact.company}
                  </p>
                </div>
                <Button variant="goldOutline" size="sm" onClick={() => setIsEditing(true)}>
                  <Pencil className="w-4 h-4" /> Edit Entry
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm">
                <div className="rounded-xl bg-secondary/50 p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="font-semibold mt-2">{selectedContact.email}</div>
                </div>
                <div className="rounded-xl bg-secondary/50 p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                  <div className="font-semibold mt-2">{selectedContact.phone}</div>
                </div>
                <div className="rounded-xl bg-secondary/50 p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Company</div>
                  <div className="font-semibold mt-2">{selectedContact.company}</div>
                </div>
                <div className="rounded-xl bg-secondary/50 p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Role</div>
                  <div className="font-semibold mt-2">{selectedContact.role}</div>
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-border bg-background p-4">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Last touchpoint</div>
                <div className="mt-2 text-sm text-muted-foreground">Conference follow-up · 2 days ago</div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm text-gold uppercase tracking-widest">Edit Details</div>
                  <div className="text-lg font-semibold mt-2">Refine this entry</div>
                </div>
                <Button
                  variant="gold"
                  size="sm"
                  onClick={() => {
                    if (!draft) return;
                    setSelectedContact(draft);
                    setIsEditing(false);
                  }}
                  disabled={!isEditing}
                >
                  Save
                </Button>
              </div>
              <div className="mt-6 space-y-4">
                <Input
                  placeholder="Full name"
                  value={draft?.name ?? ""}
                  onChange={(event) => handleEditChange("name", event.target.value)}
                  disabled={!isEditing}
                />
                <Input
                  placeholder="Role"
                  value={draft?.role ?? ""}
                  onChange={(event) => handleEditChange("role", event.target.value)}
                  disabled={!isEditing}
                />
                <Input
                  placeholder="Company"
                  value={draft?.company ?? ""}
                  onChange={(event) => handleEditChange("company", event.target.value)}
                  disabled={!isEditing}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={draft?.email ?? ""}
                  onChange={(event) => handleEditChange("email", event.target.value)}
                  disabled={!isEditing}
                />
                <Input
                  placeholder="Phone"
                  value={draft?.phone ?? ""}
                  onChange={(event) => handleEditChange("phone", event.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="mt-6 flex items-center gap-3">
                <Button variant="goldOutline" size="sm" onClick={() => setIsEditing(true)}>
                  Enable edit
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setDraft(selectedContact);
                    setIsEditing(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            Select a contact to view the full entry and edit details.
          </div>
        )}
      </main>

      <Dialog open={scanOpen} onOpenChange={setScanOpen}>
        <DialogContent className="max-w-4xl w-[calc(100%-2rem)] sm:w-full p-0 overflow-hidden max-h-[90vh] sm:max-h-[85vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto md:max-h-none md:overflow-visible">
            <div className="p-4 sm:p-6 border-b border-border md:border-b-0 md:border-r">
              <div className="text-sm text-gold uppercase tracking-widest">Camera Preview</div>
              <div className="mt-4 rounded-2xl border border-border bg-gradient-to-br from-black/90 via-black/70 to-black/50 aspect-[4/3] md:aspect-video flex items-center justify-center">
                <div className="text-center text-xs text-muted-foreground">
                  <Camera className="w-8 h-8 mx-auto mb-3 text-gold" />
                  <div>Camera ready. Hold your card steady.</div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <ScanLine className="w-4 h-4 text-gold" />
                {scanReady ? "Card captured and stabilized." : "Align the card inside the frame."}
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <DialogHeader>
                <DialogTitle>Scan business card</DialogTitle>
                <DialogDescription>Dummy scan flow. We will plug in the real camera + OCR later.</DialogDescription>
              </DialogHeader>

              <div className="mt-5">
                <Progress value={scanProgress} className="h-2" />
                <p className="text-xs text-muted-foreground mt-2">{scanReady ? "Extraction complete" : "Scanning..."}</p>
              </div>

              <div className="mt-6 text-sm text-muted-foreground">Detected fields</div>
              <div
                className={`mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 transition-opacity duration-500 ${
                  scanReady ? "opacity-100" : "opacity-40"
                }`}
              >
                <div className="rounded-xl bg-secondary/50 p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Name</div>
                  <div className="font-semibold mt-2">{scanReady ? scanPreview.name : "Analyzing..."}</div>
                </div>
                <div className="rounded-xl bg-secondary/50 p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Role</div>
                  <div className="font-semibold mt-2">{scanReady ? scanPreview.role : "Analyzing..."}</div>
                </div>
                <div className="rounded-xl bg-secondary/50 p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Company</div>
                  <div className="font-semibold mt-2">{scanReady ? scanPreview.company : "Analyzing..."}</div>
                </div>
                <div className="rounded-xl bg-secondary/50 p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="font-semibold mt-2">{scanReady ? scanPreview.email : "Analyzing..."}</div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
                <Button
                  variant="gold"
                  size="sm"
                  onClick={handleCreateFromScan}
                  disabled={!scanReady}
                  className="w-full sm:w-auto"
                >
                  Create Entry
                </Button>
                <Button variant="goldOutline" size="sm" onClick={handleRescan} className="w-full sm:w-auto">
                  Rescan
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setScanOpen(false)} className="w-full sm:w-auto">
                  Close
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="fixed bottom-6 right-6 z-40">
        <Button variant="gold" size="xl" onClick={handleScanClick}>
          <ScanLine className="w-4 h-4" /> Scan Now
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;