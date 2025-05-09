import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">OpenMCP</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Turn Any API into an MCP Server
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            OpenMCP provides a translation layer that allows you to expose any
            API as an MCP server, giving you full control over which endpoints
            you want to share.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a
                href="https://tally.so/r/w4qOkb"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Waitlist
              </a>
            </Button>
          </div>
        </section>

        <Separator className="my-12" />

        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
            What is OpenMCP?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Seamless Integration</CardTitle>
                <CardDescription>
                  Connect existing APIs without rewriting your backend
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  OpenMCP acts as a bridge between your existing API and the
                  Model Context Protocol (MCP) standard, allowing you to
                  leverage AI capabilities without major architecture changes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Granular Control</CardTitle>
                <CardDescription>
                  Choose which endpoints to expose
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  You decide exactly which API endpoints should be accessible
                  through the MCP interface, maintaining control over your data
                  and services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Enhanced Security</CardTitle>
                <CardDescription>Built-in security features</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  OpenMCP includes robust authentication and authorization
                  mechanisms to ensure your API communications remain secure
                  when exposed as an MCP server.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Developer Friendly</CardTitle>
                <CardDescription>
                  Simple configuration and extensive documentation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  With straightforward setup and comprehensive documentation,
                  you can get started quickly and integrate OpenMCP into your
                  workflow with ease.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="max-w-3xl mx-auto mb-16">
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-center">
                Join the OpenMCP Waitlist
              </CardTitle>
              <CardDescription className="text-center">
                OpenMCP is currently in private beta. Sign up to be among the
                first to get access.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <p className="mb-6 text-center max-w-xl">
                We're building a tool that makes it easy to turn any API into an
                MCP server. Join our waitlist to be notified when we launch and
                get early access to the platform.
              </p>
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a
                  href="https://tally.so/r/w4qOkb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join the Waitlist
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                We'll notify you as soon as access becomes available.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect Your API</h3>
              <p className="text-muted-foreground">
                Integrate your existing API with the OpenMCP translation layer
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Configure Endpoints
              </h3>
              <p className="text-muted-foreground">
                Select which endpoints you want to expose through the MCP
                interface
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Deploy & Scale</h3>
              <p className="text-muted-foreground">
                Deploy your MCP server and integrate with AI models and
                frameworks
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} OpenMCP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
