import { SignIn } from "@clerk/nextjs";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default function SignInPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 flex flex-col gap-16">
      <Header />
      <div className="flex justify-center items-center mt-10">
        <SignIn />
      </div>
      <Footer />
    </div>
  );
}
