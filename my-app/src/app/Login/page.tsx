import Image from "next/image";
import Button from "@/components/Button";
import InputField from "@/components/ui/input";
import MyCheckbox from "@/components/MyCheckbox";
import Link from "next/link";

function Login() {
  return (
    <main className="bg-gray-50 min-h-[100vh] flex  justify-center">
      <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/logo2.png"
                alt="logo"
                width={40}
                height={20}
                className="mb-4"
              />
            </div>
            <h1 className="text-xl sm:text-2xl font-semibold mb-6">
              YOUR ACCOUNT <br />
              FOR EVERYTHING <br />
              NIKE
            </h1>
            <InputField
              type="email"
              placeholder="Enter Email"
              className="w-full mb-4"
            />
            <InputField
              type="password"
              placeholder="Enter Password"
              className="w-full mb-6"
            />
            <div className="flex flex-col sm:flex-row justify-between items-center py-4">
              <MyCheckbox label="Keep me logged in" id="login" />
              <p className="text-sm text-gray-500 cursor-pointer mt-2 sm:mt-0">
                Forgotten Your Password?
              </p>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              By logging in, you agree to Nike&apos;s{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </p>
            <Button text="Sign In" className="rounded-md w-full py-2" />
            <p className="text-sm text-gray-600 mt-4">
              Not a Member?{" "}
              <Link href="/Signin" className="underline text-black">
                Join Us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
