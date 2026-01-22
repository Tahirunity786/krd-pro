'use client';

import React from 'react';
import { AlertTriangle } from 'lucide-react';

// --- Reusable Components ---

const StepItem = ({ number, children }) => (
  <div className="flex gap-1 items-start text-slate-500 MuiTypography-body1">
    <span className="shrink-0 font-medium">{number}-</span>
    <div>{children}</div>
  </div>
);

// --- Main Page Component ---

export default function HowToApplyPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">

      {/* 1. Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">

        {/* Header Section */}
        <div className="mb-8">
          <h1 className="MuiTypography-h1 mb-6 text-slate-900 tracking-tight">
            How to Apply
          </h1>
          <p className="text-[17px] text-slate-500 leading-relaxed max-w-6xl">
            If you are applying for an e-Visa to enter the Kurdistan Region of Iraq (KRI), you should complete the online visa application. Please pay attention to the following points for a successful application:
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-6 mb-10 max-w-6xl jss101">

          <StepItem number="1">
            When your passport, photo, and other required documents related to your visa application are ready, start a new application by clicking on the <span className="font-bold cursor-pointer text-[#C8A45D]">Apply Now</span> button.
          </StepItem>

          <StepItem number="2">
            After choosing your document type and document issuing authority, all the visa types that are available for your country will be listed. Carefully choose the type of visa that relates to your travel purpose and click on <span className="font-bold text-slate-500">Next</span>.
          </StepItem>

          <StepItem number="3">
            Fill in all the required information carefully, any wrong data might cause the rejection of your visa application.
          </StepItem>

          <StepItem number="4">
            All answers must be in English using English Alphabets only.
          </StepItem>

          <StepItem number="5">
            In the attachments section, upload a photo of yourself. Make sure the photo meets all the photo requirements. Also, you need to upload a digital photo of your passport. Make sure the digital image of your passport meets the passport copy requirements.
          </StepItem>

          <StepItem number="6">
            If you are from <span className="font-bold cursor-pointer text-[#C8A45D]">Country List B</span>, you will need to provide a sponsor code in the application in order to be sent to the sponsor you have dealt with. Your sponsor will then apply and pay on behalf of you.
          </StepItem>

          <StepItem number="7">
            After filling all the fields of the application, a summary of your application will be shown to you so you can check all the information you entered before you submit your application. Please carefully check all the information and fix any mistakes.
          </StepItem>

          <StepItem number="8">
            Once you re-checked all your answers, you have to agree to our terms and conditions, then click on the <span className="font-bold text-slate-500">Save</span> button.
          </StepItem>

          <StepItem number="9">
            You will get an email containing a verification code, enter the verification code in your application or click on the <span className="font-bold text-slate-500">Verify</span> button to verify your email address. Please pay attention to your email address, you should write an email address that you have access to as you will not be able to submit your application if you cannot verify your email address.
          </StepItem>

          <StepItem number="10">
            You will then see all the applications on your email address, click on the application to finish the application process. You will see the summary of your application once more so you can double check the information and fix the mistakes (if any).
          </StepItem>

          <StepItem number="11">
            After reviewing your application, if you are from the <span className="font-bold cursor-pointer text-[#C8A45D]">Country List A</span>, you have to click on the <span className="font-bold text-slate-500">Apply</span> button which will redirect you to the payment page. Fill in your card details and click on the <span className="font-bold text-slate-500">Pay now</span> button to pay the fees. Then, you will see a successful message followed by your visa in your email address within a few minutes.
          </StepItem>

          <StepItem number="12">
            If you are from the Country <span className="font-bold cursor-pointer text-[#C8A45D]">Country List B</span>, you have to click on the <span className="font-bold text-slate-500">Submit to Guarantor</span> button. Your application then will be preceded by your sponsor and you will be notified about the status from your sponsor.
          </StepItem>

        </div>

        {/* Additional Info Text */}
        <div className="space-y-6 mb-10 text-[15px] text-slate-500 leading-relaxed max-w-6xl">
          <p>
            Electronically submitting your online application is the first step in the visa application process. Depending on your country, some applicants will get their e-Visa on spot through email, while some other applicants will need to provide a sponsor code in the application in order to be sent to its sponsor and they will apply and pay on behalf of the applicant. You should wait for your application to pass all required processes within 5 business days. By changing your application status, a status email will be sent to your email address.
          </p>
          <p>
            You also can check the application status by retrieving your application through <span className="font-bold cursor-pointer text-[#C8A45D]">Retrieve Your Application</span> .
          </p>
        </div>

        {/* Warning/Note Box */}
        <div className="w-full mb-4">
          <div className="bg-orange-50 border border-orange-100 rounded-md p-3 flex items-start gap-1 ">

            <div className="MuiAlert-root MuiAlert-standardWarning">

              <div className="MuiAlert-icon">
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path></svg>
              </div>

              <div className="MuiAlert-message">
                <span className="font-semibold text-[1rem] block mb-1">Note</span>
                <p className="text-[##623f04] MuiTypography-body1">
                  If you do not complete the email verification process within 3 days, your application will expire and you will have to start over.


                </p>
              </div>

            </div>

          </div>
        </div>

      </div>


    </main>
  );
}