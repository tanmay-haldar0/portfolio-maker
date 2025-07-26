import { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, FieldArray, type FormikProps, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { generateId, saveToLocal } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import { usePortfolioContext } from "../context/PortfolioContext";

const steps = [
  "Hero",
  "About",
  "Skills",
  "Services",
  "Portfolio",
  "Testimonials",
  "Blog",
  "Contact",
];


const validationSchemas = [
  Yup.object({
    name: Yup.string().required("Required"),
    title: Yup.string().required("Required"),
    tagline: Yup.string().required("Required"),
    profileImage: Yup.mixed().required("Required"),
  }),
  Yup.object({
    bio: Yup.string().required("Required"),
    email: Yup.string().email("Invalid").required("Required"),
    phone: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
    linkedin: Yup.string().url().required("Required"),
    github: Yup.string().url().required("Required"),
    twitter: Yup.string().url().required("Required"),
  }),
  Yup.object({
    skills: Yup.array().min(1, "At least 1 skill"),
  }),
  Yup.object({
    services: Yup.array()
      .of(
        Yup.object({
          title: Yup.string().required("Required"),
          description: Yup.string().required("Required"),
        })
      )
      .min(1),
  }),
  Yup.object({
    projects: Yup.array()
      .of(
        Yup.object({
          title: Yup.string().required("Required"),
          description: Yup.string().required("Required"),
        })
      )
      .min(1),
  }),
  Yup.object({
    testimonials: Yup.array()
      .of(
        Yup.object({
          name: Yup.string().required("Required"),
          quote: Yup.string().required("Required"),
        })
      )
      .min(1),
  }),
  Yup.object({
    blogTitle: Yup.string(),
    blogSummary: Yup.string(),
  }),
  Yup.object({
    message: Yup.string().required("Required"),
    contactEmail: Yup.string().email().required("Required"),
    contactPhone: Yup.string().required("Required"),
  }),
];

export default function FormPage() {
  const formikRef = useRef<FormikProps<any>>(null);
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const { selectedTemplate } = usePortfolioContext();

  const initialValues = {
    // Hero
    name: "",
    title: "",
    tagline: "",
    profileImage: null,
    // About
    bio: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    twitter: "",
    // Skills
    skills: [],
    // Services
    services: [{ title: "", description: "" }],
    // Portfolio
    projects: [{ title: "", description: "" }],
    // Testimonials
    testimonials: [{ name: "", quote: "" }],
    // Blog
    blogTitle: "",
    blogSummary: "",
    // Contact
    message: "",
    contactEmail: "",
    contactPhone: "",
  };

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_draft");
    const step = localStorage.getItem("portfolio_step");

    if (saved && formikRef.current) {
      formikRef.current.setValues(JSON.parse(saved));
      setCurrentStep(parseInt(step || "0"));
    }
  }, []);



  const handleImageChange = (e: any, setFieldValue: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setFieldValue("profileImage", base64);       // ✅ store base64 string
        setPreviewImage(base64);                      // ✅ show preview
      };
      reader.readAsDataURL(file);                     // ✅ convert to base64
    }
  };


  const handleSubmit = (values: any) => {
  const id = generateId();
  saveToLocal(`portfolio_${id}`, values);
  localStorage.setItem("selected_template", selectedTemplate!);// in case it's used in preview/portfolio
  navigate(`/preview/${id}`);
};


  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm shadow"
      >
        ← Back to Templates
      </button>

      <h1 className="text-3xl font-bold text-center mb-6">Build Your Portfolio</h1>

      {/* Stepper */}
      <div className="flex justify-center items-center mb-10 overflow-x-auto">
        {steps.map((label, index) => {
          const isActive = currentStep === index;
          const isCompleted = currentStep > index;

          return (
            <div key={index} className="flex items-center">
              <button
                type="button"
                onClick={() => setCurrentStep(index)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition duration-200 ${isCompleted
                  ? "bg-green-500 text-white"
                  : isActive
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300"
                  }`}
              >
                {isCompleted ? "✓" : index + 1}
              </button>
              <span className="ml-2 text-sm text-white whitespace-nowrap">{label}</span>

              {index < steps.length - 1 && (
                <div className="w-8 h-1 bg-gray-500 mx-2 rounded hidden sm:block" />
              )}
            </div>
          );
        })}
      </div>


      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        validationSchema={validationSchemas[currentStep]}
        onSubmit={(values) => {
          localStorage.setItem("portfolio_draft", JSON.stringify(values));
          localStorage.setItem("portfolio_step", currentStep.toString());

          if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
          } else {
            handleSubmit(values);
          }
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className="max-w-3xl mx-auto space-y-6">
            {/* STEP 0 - HERO */}
            {currentStep === 0 && (
              <>
                <Field name="name" placeholder="Full Name" className="input" />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                <Field name="title" placeholder="Title" className="input" />
                <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
                <Field name="tagline" placeholder="Tagline" className="input" />
                <ErrorMessage name="tagline" component="div" className="text-red-500 text-sm" />

                <input
                  type="file"
                  onChange={(e) => handleImageChange(e, setFieldValue)}
                  className="text-white"
                />
                <ErrorMessage name="profileImage" component="div" className="text-red-500 text-sm" />

                {previewImage && (
                  <img src={previewImage} alt="preview" className="h-24 w-24 rounded-full mt-2" />
                )}
              </>
            )}

            {/* STEP 1 - ABOUT */}
            {currentStep === 1 && (
              <>
                <Field as="textarea" name="bio" placeholder="Bio" className="input" />
                <ErrorMessage name="bio" component="div" className="text-red-500 text-sm" />
                <Field name="email" placeholder="Email" className="input" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                <Field name="phone" placeholder="Phone" className="input" />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                <Field name="location" placeholder="Location" className="input" />
                <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
                <Field name="linkedin" placeholder="LinkedIn URL" className="input" />
                <ErrorMessage name="linkedin" component="div" className="text-red-500 text-sm" />
                <Field name="github" placeholder="GitHub URL" className="input" />
                <ErrorMessage name="github" component="div" className="text-red-500 text-sm" />
                <Field name="twitter" placeholder="Twitter URL" className="input" />
                <ErrorMessage name="twitter" component="div" className="text-red-500 text-sm" />
              </>
            )}

            {/* STEP 2 - SKILLS */}
            {currentStep === 2 && (
              <>
                <Select
                  isMulti
                  name="skills"
                  className="text-black"
                  options={[
                    { value: "React", label: "React" },
                    { value: "Node.js", label: "Node.js" },
                    { value: "MongoDB", label: "MongoDB" },
                    { value: "TypeScript", label: "TypeScript" },
                    { value: "Tailwind", label: "Tailwind CSS" },
                  ]}
                  value={values.skills}
                  onChange={(selected: any) => setFieldValue("skills", selected)}
                />
                {errors.skills && touched.skills && (
                  <div className="text-red-500 text-sm">{(errors.skills as any)?.toString()}</div>
                )}
              </>
            )}

            {/* STEP 3 - SERVICES */}
            {currentStep === 3 && (
              <FieldArray name="services">
                {({ remove, push }) => (
                  <>
                    {values.services.map((_: any, index: number) => (
                      <div key={index} className="mb-4">
                        <Field
                          name={`services.${index}.title`}
                          placeholder="Service Title"
                          className="input"
                        />
                        <ErrorMessage
                          name={`services.${index}.title`}
                          component="div"
                          className="text-red-500 text-sm"
                        />
                        <Field
                          name={`services.${index}.description`}
                          placeholder="Description"
                          className="input"
                        />
                        <ErrorMessage
                          name={`services.${index}.description`}
                          component="div"
                          className="text-red-500 text-sm"
                        />
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-sm text-red-400"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => push({ title: "", description: "" })}
                      className="btn"
                    >
                      + Add Service
                    </button>
                  </>
                )}
              </FieldArray>
            )}

            {/* STEP 4 - PORTFOLIO */}
            {currentStep === 4 && (
              <FieldArray name="projects">
                {({ remove, push }) => (
                  <>
                    {values.projects.map((_: any, index: number) => (
                      <div key={index} className="mb-4">
                        <Field
                          name={`projects.${index}.title`}
                          placeholder="Project Title"
                          className="input"
                        />
                        <ErrorMessage
                          name={`projects.${index}.title`}
                          component="div"
                          className="text-red-500 text-sm"
                        />
                        <Field
                          name={`projects.${index}.description`}
                          placeholder="Description"
                          className="input"
                        />
                        <ErrorMessage
                          name={`projects.${index}.description`}
                          component="div"
                          className="text-red-500 text-sm"
                        />
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-sm text-red-400"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => push({ title: "", description: "" })}
                      className="btn"
                    >
                      + Add Project
                    </button>
                  </>
                )}
              </FieldArray>
            )}

            {/* STEP 5 - TESTIMONIALS */}
            {currentStep === 5 && (
              <FieldArray name="testimonials">
                {({ remove, push }) => (
                  <>
                    {values.testimonials.map((_: any, index: number) => (
                      <div key={index} className="mb-4">
                        <Field
                          name={`testimonials.${index}.name`}
                          placeholder="Client Name"
                          className="input"
                        />
                        <ErrorMessage
                          name={`testimonials.${index}.name`}
                          component="div"
                          className="text-red-500 text-sm"
                        />
                        <Field
                          name={`testimonials.${index}.quote`}
                          placeholder="Client Quote"
                          className="input"
                        />
                        <ErrorMessage
                          name={`testimonials.${index}.quote`}
                          component="div"
                          className="text-red-500 text-sm"
                        />
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-sm text-red-400"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => push({ name: "", quote: "" })}
                      className="btn"
                    >
                      + Add Testimonial
                    </button>
                  </>
                )}
              </FieldArray>
            )}

            {/* STEP 6 - BLOG */}
            {currentStep === 6 && (
              <>
                <Field name="blogTitle" placeholder="Blog Title" className="input" />
                <ErrorMessage name="blogTitle" component="div" className="text-red-500 text-sm" />
                <Field name="blogSummary" placeholder="Blog Summary" className="input" />
                <ErrorMessage name="blogSummary" component="div" className="text-red-500 text-sm" />
              </>
            )}

            {/* STEP 7 - CONTACT */}
            {currentStep === 7 && (
              <>
                <Field as="textarea" name="message" placeholder="Message" className="input" />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                <Field name="contactEmail" placeholder="Your Email" className="input" />
                <ErrorMessage name="contactEmail" component="div" className="text-red-500 text-sm" />
                <Field name="contactPhone" placeholder="Phone" className="input" />
                <ErrorMessage name="contactPhone" component="div" className="text-red-500 text-sm" />
              </>
            )}

            {/* NAVIGATION BUTTONS */}
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
                className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
              >
                {currentStep === steps.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </Form>
        )}
      </Formik>

    </div>
  );
}
