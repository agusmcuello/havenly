import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "./../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

const registerUrl = `/auth/local/register`;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post(registerUrl, data);
    toast.success("Account created successfully");
    return redirect("/login");
  } catch (error) {
    const errMessagge =
      error?.response?.data?.error?.message ||
      "please double check your credentials";
    toast.error(errMessagge);
    return null;
  }
};
const Register = () => {
  return (
    <section className="h-screen bg-secondary grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput label="username" name="username" type="text" />
        <FormInput label="email" name="email" type="email" />
        <FormInput label="password" name="password" type="password" />
        <SubmitBtn text="Register" />
        <p className="text-center">
          Already a member?{" "}
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
