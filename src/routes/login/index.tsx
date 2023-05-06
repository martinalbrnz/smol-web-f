import { createForm } from "@felte/solid";
import { HiSolidEye, HiSolidEyeOff } from "solid-icons/hi";
import { createSignal } from "solid-js";
import Input from "~/components/shared/Input";

const Login = () => {
  const [showPassword, setShowPassword] = createSignal<boolean>(false);
  const theme = "dark";

  const { form } = createForm({
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <main class={`${theme}`}>
      <div class="w-full h-full flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-950">
        <div class="flex flex-col items-center justify-center p-6 pt-8 bg-gray-50 dark:bg-blue-950 rounded-lg shadow w-96">
          <h2 class="text-gray-800 dark:text-white font-bold text-3xl mb-12 select-none">
            Welcome!
          </h2>
          <form ref={form} class="flex flex-col gap-2 self-center w-full">
            <Input
              type="text"
              name="email"
              label="Email or user"
              placeholder="Enter email or username"
            />

            <Input
              type={showPassword() ? "text" : "password"}
              name="password"
              label={"Password"}
              placeholder="Enter your password"
              trailing={showPassword() ? <HiSolidEye /> : <HiSolidEyeOff />}
              trailingCallback={() => setShowPassword((prev) => !prev)}
            />

            <button
              type="submit"
              class="text-gray-800 dark:text-white bg-blue-400 dark:bg-blue-700
							outline-none p-1 mt-2 rounded font-semibold select-none shadow transition-all
							active:scale-[.99] active:bg-blue-500 dark:active:bg-blue-800"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
