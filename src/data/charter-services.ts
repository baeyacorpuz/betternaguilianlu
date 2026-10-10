import type { Service } from "@/data/charter"
import { serviceCategories } from "@/data/site"

export const services: Service[] = [
  // ── Office of the Mayor: Administrative Unit ──────────────────────────────
  {
    id: "issuance-of-mayors-clearance",
    name: "Issuance of Mayor’s Clearance",
    category: "records",
    department: "mayor",
    office: "Administrative Unit",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen", "G2B – Government to Business"],
    whoMayAvail: "Any requesting party",
    requirements: [
      { item: "Police Clearance", whereToSecure: "PNP" },
      { item: "Official Receipt", whereToSecure: "Treasury Office" },
    ],
    steps: [
      {
        client: "Fills up the request form and submit the requirements",
        actions: [
          { action: "Receives request form and checks the requirements. Advises the client to proceed to the Treasury Office to pay the prescribed fees.", fee: "Local: PHP 100.00; Abroad: PHP 200.00", time: "5-10 minutes", responsible: "Rhealyn R. Gapuz, Administrative Aide I" },
          { action: "Prepares the clearance", time: "4 hours", responsible: "Rhealyn R. Gapuz, Administrative Aide I" },
        ],
      },
      {
        client: "Proceed to the Treasury Office and pay the prescribed fees",
        actions: [
          { action: "Receives the payment and issues an official receipt (OR)", time: "5-10 minutes", responsible: "Municipal Treasury Office Personnel" },
        ],
      },
      {
        client: "Submit the OR to the staff",
        actions: [
          { action: "Attaches the OR to the clearance and brings the document to the Mayor for her signature", time: "5 minutes", responsible: "Rhealyn R. Gapuz, Administrative Aide I" },
          { action: "Signs the clearance", time: "1-2 days", responsible: "Hon. Nieri T. Flores, Municipal Mayor" },
        ],
      },
      {
        client: "Receives the Mayor’s Clearance",
        actions: [
          { action: "Releases the Mayor’s Clearance", time: "5-10 minutes", responsible: "Susan P. Umagtang, Administrative Aide I" },
        ],
      },
      {
        client: "Accomplish client satisfaction/feedback form",
        actions: [
          { action: "Gives the feedback form to the client", fee: "None", time: "5-10 minutes", responsible: "Susan P. Umagtang, Administrative Aide I" },
        ],
      },
    ],
    totalTime: "2 days, 4 hours, and 45 minutes",
    page: 26,
    keywords: ["clearance", "police clearance", "employment", "abroad"],
  },
  {
    id: "issuance-of-mayors-recommendation-indorsement",
    name: "Issuance of Mayor’s Recommendation/Indorsement",
    category: "records",
    department: "mayor",
    office: "Administrative Unit",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizens", "G2B – Government to Business", "G2G – Government to Government"],
    whoMayAvail: "Any requesting party",
    requirements: [
      { group: "Mayor’s Recommendation – for employment", item: "Barangay Endorsement", whereToSecure: "Barangay concerned" },
      { group: "Mayor’s Recommendation – for employment", item: "Drug Test Result", whereToSecure: "Any DOH Accredited Drug Screening Center" },
      { group: "Mayor’s Recommendation – for employment", item: "Tattan Naguilian ID (for 18 y/o and above)", whereToSecure: "MISU (located at the Business-One-Stop-Shop)" },
      { group: "Mayor’s Recommendation – for employment", item: "Personal Data Sheet (PDS)/Resume", whereToSecure: "Prepared by requesting party" },
      { group: "Mayor’s Recommendation – for employment", item: "Photocopy of Contract of Service (for renewal of contract)", whereToSecure: "Requesting party’s Employer" },
      { group: "Mayor’s Recommendation – for scholarship", item: "Certificate of Indigency", whereToSecure: "Barangay concerned" },
      { group: "Mayor’s Recommendation – for scholarship", item: "Tattan Naguilian ID (for 18 y/o and above)", whereToSecure: "MISU (located at the Business-One-Stop-Shop)" },
      { group: "Mayor’s Recommendation – for scholarship", item: "Duly accomplished application form", whereToSecure: "School" },
      { group: "Mayor’s Recommendation – for scholarship", item: "Certificate of Grades", whereToSecure: "School" },
      { group: "Mayor’s Recommendation – for SPES", item: "Certificate of Indigency", whereToSecure: "Barangay concerned" },
      { group: "Mayor’s Recommendation – for SPES", item: "Tattan Naguilian ID (for 18 y/o and above)", whereToSecure: "MISU (located at the Business-One-Stop-Shop)" },
      { group: "Mayor’s Recommendation – for SPES", item: "Duly accomplished application form", whereToSecure: "DOLE or PESO" },
      { group: "Mayor’s Indorsement", item: "Approved Barangay Resolution/communication", whereToSecure: "Barangay concerned" },
    ],
    steps: [
      {
        client: "Fills up the request form and submit the requirements",
        actions: [
          { action: "Receives request form and checks the requirements", fee: "None", time: "5-10 minutes", responsible: "Rhealyn R. Gapuz, Administrative Aide I" },
          { action: "Prepares the Mayor's Recommendation/Indorsement", time: "4 hours", responsible: "Rhealyn R. Gapuz, Administrative Aide I" },
          { action: "Signs the Mayor's Recommendation/Indorsement", time: "1-2 days", responsible: "Hon. Nieri T. Flores, Municipal Mayor" },
        ],
      },
      {
        client: "Receives the Mayor's Recommendation/Indorsement",
        actions: [
          { action: "Releases the Mayor's Recommendation/Indorsement", time: "5-10 minutes", responsible: "Susan P. Umagtang, Administrative Aide I" },
        ],
      },
      {
        client: "Accomplish client satisfaction/feedback form",
        actions: [
          { action: "Gives the feedback form to the client", fee: "None", time: "5-10 minutes", responsible: "Susan P. Umagtang, Administrative Aide I" },
        ],
      },
    ],
    totalTime: "2 days, 4 hours, and 30 minutes",
    page: 27,
    keywords: ["recommendation", "endorsement", "scholarship", "spes", "employment", "job"],
  },
  {
    id: "issuance-of-permit-mayors-office",
    name: "Issuance of Permit (Surveys, Motorcades, Promotions and Solicitations)",
    category: "records",
    department: "mayor",
    office: "Administrative Unit",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizens", "G2B – Government to Business", "G2G – Government to Government"],
    whoMayAvail: "Any requesting party",
    requirements: [
      { group: "Conduct of survey for research/thesis", item: "Approved Letter of Intent", whereToSecure: "Prepared by the student/s and noted by adviser" },
      { group: "Conduct of survey for research/thesis", item: "School ID" },
      { group: "Motorcade/fun run/procession/Christmas carol", item: "Approved Letter of Intent", whereToSecure: "Prepared by requesting party" },
      { group: "Conduct of promotional activities (product sampling, advertising, etc. – except selling of products)", item: "Approved Letter of Intent", whereToSecure: "Prepared by requesting party" },
      { group: "Conduct of promotional activities (product sampling, advertising, etc. – except selling of products)", item: "Authorization from the company" },
      { group: "Conduct of promotional activities (product sampling, advertising, etc. – except selling of products)", item: "Company ID" },
      { group: "Conduct of solicitation (organization within the municipality)", item: "Approved Letter of Intent", whereToSecure: "Prepared by requesting party" },
      { group: "Conduct of solicitation (organization within the municipality)", item: "Authorization from the organization" },
      { group: "Conduct of solicitation (organization within the municipality)", item: "Organization ID" },
      { group: "Conduct of solicitation (organization outside the municipality)", item: "Approved Letter of Intent", whereToSecure: "Prepared by requesting party" },
      { group: "Conduct of solicitation (organization outside the municipality)", item: "Authorization from the organization" },
      { group: "Conduct of solicitation (organization outside the municipality)", item: "DSWD (Central Office) Authority to conduct fund campaign" },
      { group: "Conduct of solicitation (organization outside the municipality)", item: "Organization ID" },
    ],
    steps: [
      {
        client: "Fills up the request form and submit the requirements",
        actions: [
          { action: "Receives request form and checks the requirements", fee: "None", time: "5-10 minutes", responsible: "Annaliza F. Estacio, Administrative Aide" },
          { action: "Prepares the permit", fee: "None", time: "4 hours", responsible: "Rachel M. De Guzman, Administrative Aide I" },
          { action: "Signs the permit", fee: "None", time: "1-2 days", responsible: "Hon. Nieri T. Flores, Municipal Mayor" },
        ],
      },
      {
        client: "Receives the Permit",
        actions: [
          { action: "Releases the Permit", fee: "None", time: "5-10 minutes", responsible: "Rachel M. De Guzman, Administrative Aide I" },
        ],
      },
      {
        client: "Accomplish client satisfaction/feedback form",
        actions: [
          { action: "Gives the feedback form to the client", fee: "None", time: "5-10 minutes", responsible: "Susan P. Umagtang, Administrative Aide I" },
        ],
      },
    ],
    totalTime: "2 days, 4 hours, and 30 minutes",
    page: 28,
    keywords: ["survey", "thesis", "research", "motorcade", "fun run", "procession", "caroling", "solicitation", "promotion", "sampling"],
  },
  {
    id: "issuance-of-certification-mayors-office",
    name: "Issuance of Certification (Office of the Mayor)",
    category: "records",
    department: "mayor",
    office: "Administrative Unit",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizens", "G2B – Government to Business", "G2G – Government to Government"],
    whoMayAvail: "Any requesting party",
    requirements: [{ item: "Varies depending on the transaction" }],
    steps: [
      {
        client: "Fills up the request form and submit the requirements",
        actions: [
          { action: "Receives request form and checks the requirements", fee: "None", time: "5-10 minutes", responsible: "Annaliza F. Estacio, Administrative Aide" },
          { action: "Prepares the Certification", fee: "None", time: "4 hours", responsible: "Annaliza F. Estacio, Administrative Aide" },
          { action: "Signs the Certification", fee: "None", time: "1-2 days", responsible: "Hon. Nieri T. Flores, Municipal Mayor" },
        ],
      },
      {
        client: "Receives the Certification",
        actions: [
          { action: "Releases the Certification", fee: "None", time: "5-10 minutes", responsible: "Susan P. Umagtang, Administrative Aide I" },
        ],
      },
      {
        client: "Accomplish client satisfaction/feedback form",
        actions: [
          { action: "Gives the feedback form to the client", fee: "None", time: "5-10 minutes", responsible: "Susan P. Umagtang, Administrative Aide I" },
        ],
      },
    ],
    totalTime: "2 days, 4 hours, and 30 minutes",
    page: 29,
    keywords: ["certificate", "certification", "mayor"],
  },
  {
    id: "request-for-solemnization-of-marriage",
    name: "Request for Solemnization of Marriage",
    category: "records",
    department: "mayor",
    office: "Administrative Unit",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizens"],
    whoMayAvail: "Couples who request the Mayor to solemnize their marriage",
    requirements: [
      { item: "Marriage License or Affidavit of Cohabitation if the parties are living together for a minimum of five (5) years", whereToSecure: "Municipal Civil Registry Office" },
    ],
    steps: [
      {
        client: "Seeks approval of the Mayor for the desired schedule of solemnization of marriage",
        actions: [
          { action: "Checks the availability of the Mayor and gets her approval", fee: "None", time: "5 minutes", responsible: "Rhealyn R. Gapuz, Administrative Aide I" },
        ],
      },
      {
        client: "Submits marriage license/affidavit of cohabitation",
        actions: [
          { action: "Receives the document and record the schedule of marriage", fee: "None", time: "5 minutes", responsible: "Rhealyn R. Gapuz, Administrative Aide I" },
        ],
      },
      {
        client: "Proceeds to the Municipal Civil Registry Office and submits affidavit of cohabitation",
        actions: [
          { action: "Prepares the Certificate of Marriage", fee: "None", time: "15 minutes", responsible: "Municipal Civil Registry Office Personnel" },
        ],
      },
      {
        client: "Comes back to the office on the scheduled date of marriage",
        actions: [
          { action: "Solemnizes the marriage", fee: "None", time: "1 hour", responsible: "Hon. Nieri T. Flores, Municipal Mayor" },
          { action: "Registers Certificate of Marriage", fee: "None", time: "15 minutes", responsible: "Municipal Civil Registry Office Personnel" },
        ],
      },
      {
        client: "Receives the Original copy of the Certificate of Marriage",
        actions: [
          { action: "Releases the original copy of the Certificate of Marriage", fee: "None", time: "5 minutes", responsible: "Municipal Civil Registry Office Personnel" },
        ],
      },
    ],
    totalTime: "1 hour and 45 minutes",
    page: 30,
    keywords: ["wedding", "kasal", "civil wedding", "marriage", "solemnize"],
  },

  // ── Office of the Mayor: Tourism Unit ──────────────────────────────────────
  {
    id: "rental-of-naguilian-civic-center",
    name: "Rental of Government Facilities: Naguilian Civic Center",
    category: "facilities",
    department: "mayor",
    office: "Tourism Unit",
    classification: "Simple",
    transactionTypes: ["G2G – Government to Government"],
    whoMayAvail: "Any requesting party",
    requirements: [
      { item: "Approved request letter", whereToSecure: "Tourism Unit" },
      { item: "Order of Payment", whereToSecure: "Tourism Unit" },
    ],
    steps: [
      {
        client: "Submit request letter approved by the Mayor",
        actions: [
          { action: "Checks for availability of the request date", fee: "None", time: "3 minutes", responsible: "Julie Ann O. Gurion, Administrative Aide I; Aprille Glo C. Banayat, Administrative Aide" },
        ],
      },
      {
        client: "Present the Order of Payment",
        actions: [
          { action: "Collects payment for rental", fee: "Civic Center rental: PHP 1,000.00 per hour; use of sound system: PHP 200.00 per hour; use of lights and current: PHP 200.00 per hour", time: "5 minutes", responsible: "Treasury Staff (collector)" },
        ],
      },
      {
        client: "Present the O.R. at Tourism Office",
        actions: [
          { action: "Set a schedule of availability of the Civic Center", fee: "None", time: "3 minutes", responsible: "Julie Ann O. Gurion, Administrative Aide I; Aprille Glo C. Banayat, Administrative Aide" },
        ],
      },
    ],
    page: 31,
    keywords: ["venue", "event", "hall", "rent", "civic center", "sound system"],
  },
  {
    id: "rental-of-naguilian-plaza",
    name: "Rental of Government Facilities: Naguilian Plaza",
    category: "facilities",
    department: "mayor",
    office: "Tourism Unit",
    classification: "Simple",
    transactionTypes: ["G2G – Government to Government"],
    whoMayAvail: "Any requesting party",
    requirements: [{ item: "Approved request letter", whereToSecure: "Tourism Unit" }],
    steps: [
      {
        client: "Submit request letter approved by the Mayor",
        actions: [
          { action: "Checks for availability of the request date", fee: "None", time: "3 minutes", responsible: "Julie Ann O. Gurion, Administrative Aide I; Aprille Glo C. Banayat, Administrative Aide" },
          { action: "Set a schedule of availability of the Plaza", fee: "None", time: "3 minutes", responsible: "Julie Ann O. Gurion, Administrative Aide I; Aprille Glo C. Banayat, Administrative Aide" },
        ],
      },
    ],
    page: 32,
    keywords: ["venue", "event", "plaza", "rent"],
  },
  {
    id: "request-of-tourism-related-data",
    name: "Request of Tourism Related Data",
    category: "facilities",
    department: "mayor",
    office: "Tourism Unit",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Client"],
    whoMayAvail: "Any requesting party",
    requirements: [{ item: "Copy of letter request", whereToSecure: "Office of the Mayor / Administrative Unit" }],
    steps: [
      {
        client: "Inform and copy furnish letter request to gather tourism related information",
        actions: [
          { action: "Checks the request letter", fee: "None", time: "1 minute", responsible: "Jino Banaña, Administrative Aide I; Julie Ann O. Gurion, Administrative Aide I; Aprille Glo C. Banayat, Administrative Aide" },
          { action: "Checks for the availability of the data", fee: "None", time: "5 minutes", responsible: "Jino Banaña, Administrative Aide I; Julie Ann O. Gurion, Administrative Aide I; Aprille Glo C. Banayat, Administrative Aide" },
          { action: "Prepare the document/s requested", fee: "None", time: "2 minutes", responsible: "Jino Banaña, Administrative Aide I; Julie Ann O. Gurion, Administrative Aide I; Aprille Glo C. Banayat, Administrative Aide" },
          { action: "Release of the document/s requested", fee: "None", time: "2 minutes", responsible: "Jino Banaña, Administrative Aide I; Julie Ann O. Gurion, Administrative Aide I; Aprille Glo C. Banayat, Administrative Aide" },
        ],
      },
    ],
    page: 32,
    keywords: ["tourism", "tourist", "data", "statistics", "basi"],
  },

  // ── Office of the Vice Mayor & Sangguniang Bayan ──────────────────────────
  {
    id: "certified-copies-of-sb-resolutions-ordinances-journals-minutes",
    name: "Issuance of Certified Copies of Resolutions, Ordinances, Journals and Minutes of Sessions",
    category: "records",
    department: "sb",
    office: "Office of the Sangguniang Bayan",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [{ item: "Letter Request" }, { item: "Valid Identification Card" }],
    steps: [
      {
        client: "Submit letter request",
        actions: [
          { fee: "None", time: "5 minutes", responsible: "Atty. Dearkyle Anicee A. Galvez-Taqued; Jelly S. Casuga; George C. Delizo; Camille F. Olitan; Raven Joie G. Abenoja" },
        ],
      },
      { client: "Refer letter request to Secretary to the Sanggunian", actions: [] },
      {
        client: "Accomplishes prescribed form for a certified copy of a resolution, ordinance, journal or minutes of meetings",
        actions: [
          { action: "Accepts/receives the request form, assesses the fees to be paid and retrieves the requested document/s from the file", fee: "None", time: "5 minutes" },
        ],
      },
      {
        client: "Preparation of documents",
        actions: [
          { action: "Prepares the requested documents", fee: "None", time: "5-10 minutes", responsible: "Jelly S. Casuga; Camille F. Olitan; Raven Joie G. Abenoja" },
        ],
      },
      {
        client: "Release of documents",
        actions: [
          { action: "Releases the requested documents", fee: "None", time: "1 minute", responsible: "George C. Delizo; Camille F. Olitan" },
        ],
      },
    ],
    page: 38,
    keywords: ["ordinance", "resolution", "minutes", "journal", "certified true copy", "sanggunian", "legislative"],
  },

  // ── Sangguniang Bayan Secretariat ───────────────────────────────────────────
  {
    id: "issuance-of-tricycle-franchise",
    name: "Issuance of Tricycle Franchise",
    category: "transport",
    department: "sb-secretariat",
    office: "Office of the Sangguniang Bayan Secretariat",
    classification: "Highly Technical",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [
      { group: "New/renew", item: "Filled up Inspection Form", whereToSecure: "Sangguniang Bayan Office" },
      { group: "New/renew", item: "Barangay Clearance", whereToSecure: "Barangay" },
      { group: "New/renew", item: "Community Tax Certificate (Cedula)", whereToSecure: "Barangay" },
      { group: "New/renew", item: "Endorsement Punong Barangay", whereToSecure: "Barangay" },
      { group: "New/renew", item: "TODA Certification", whereToSecure: "Barangay" },
      { group: "New/renew", item: "Sanitary Permit which includes: Negative Drug Test Result, Health Certificate (ID), Laboratory Result", whereToSecure: "Municipal Health Office" },
      { group: "New/renew", item: "Police Clearance", whereToSecure: "PNP Naguilian" },
      { group: "New/renew", item: "Mayor’s Clearance", whereToSecure: "Office of the Mayor" },
      { group: "New/renew", item: "Official Receipt – LTO", whereToSecure: "LTO" },
      { group: "New/renew", item: "Certification of Registration", whereToSecure: "LTO" },
      { group: "New/renew", item: "Insurance Policy", whereToSecure: "LTO" },
      { group: "New/renew", item: "SSS Clearance", whereToSecure: "SSS Office" },
      { group: "New/renew", item: "Pag-ibig Clearance", whereToSecure: "Pag-ibig Office" },
      { group: "New/renew", item: "Philhealth Clearance", whereToSecure: "Philhealth Office" },
      { group: "New/renew", item: "Original Copy of Franchise (Renewal)", whereToSecure: "Sangguniang Bayan Office" },
      { group: "New/renew", item: "Photocopy of Driver’s License" },
      { group: "New/renew", item: "Vaccination Card/Evidence of Vaccination" },
      { group: "New/renew", item: "Certification/evidence of tree planting" },
    ],
    steps: [
      {
        client: "Submits the requirements",
        actions: [{ action: "Checks the requirements", time: "10 minutes", responsible: "George Delizo; Raven Joie G. Abenoja" }],
      },
      {
        client: "",
        actions: [{ action: "Enactment of Franchise Ordinance", time: "2-3 weeks", responsible: "SBM Members" }],
      },
      {
        client: "Affixes his/her signature",
        actions: [{ action: "Prepares Certification of Franchise for signature", time: "10 minutes", responsible: "Jelly S. Casuga; Camille F. Olitan" }],
      },
      {
        client: "",
        actions: [{ action: "Brings the Certification of Franchise to the Office of the Vice Mayor and Mayor for approval", time: "1 day after approval", responsible: "George Delizo; Manny O. Julaton" }],
      },
      {
        client: "Receives the approved franchise",
        actions: [{ action: "Issuance of Franchise", time: "10 minutes after referral", responsible: "Analyn Yllera; Raven Joie G. Abenoja" }],
      },
      {
        client: "",
        actions: [{ action: "Proceed to BPLO" }],
      },
    ],
    page: 156,
    keywords: ["tricycle", "franchise", "mtop", "toda", "trike", "renew franchise"],
  },
  {
    id: "transfer-of-tricycle-franchise",
    name: "Transfer of Tricycle Franchise",
    category: "transport",
    department: "sb-secretariat",
    office: "Office of the Sangguniang Bayan Secretariat",
    classification: "Highly Technical",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [
      { item: "Affidavit executed by the transferor" },
      { item: "Original copy of the duly executed Deed of Absolute Sale or Deed of Transfer" },
      { item: "Affidavit of Undertaking of the Transferee/Vendee" },
      { item: "Barangay Clearance", whereToSecure: "Barangay" },
      { item: "Community Tax Certificate (Cedula)", whereToSecure: "Barangay" },
      { item: "Endorsement Punong Barangay", whereToSecure: "Barangay" },
      { item: "TODA Certification", whereToSecure: "Barangay" },
      { item: "Sanitary Permit which includes: Negative Drug Test Result, Health Certificate (ID), Laboratory Result", whereToSecure: "Municipal Health Office" },
      { item: "Police Clearance", whereToSecure: "PNP Naguilian" },
      { item: "Mayor’s Clearance", whereToSecure: "Office of the Mayor" },
      { item: "Official Receipt – LTO", whereToSecure: "LTO" },
      { item: "Certification of Registration", whereToSecure: "LTO" },
      { item: "Insurance Policy", whereToSecure: "LTO" },
      { item: "SSS Clearance", whereToSecure: "SSS Office" },
      { item: "Pag-ibig Clearance", whereToSecure: "Pag-ibig Office" },
      { item: "Philhealth Clearance", whereToSecure: "Philhealth Office" },
      { item: "Original Copy of Franchise", whereToSecure: "Sangguniang Bayan Office" },
      { item: "Photocopy of Driver’s License" },
      { item: "Two (2) copies 2x2 picture" },
    ],
    steps: [
      {
        client: "Submits the requirements",
        actions: [{ action: "Checks the requirements", time: "10 minutes", responsible: "George Delizo; Raven Joie G. Abenoja" }],
      },
      {
        client: "",
        actions: [{ action: "Enactment of Franchise Resolution", time: "2-3 weeks", responsible: "SBM Members" }],
      },
      {
        client: "Affixes his/her signature",
        actions: [{ action: "Prepares Certification of Franchise for signature", time: "10 minutes", responsible: "Jelly S. Casuga; Camille F. Olitan" }],
      },
      {
        client: "",
        actions: [{ action: "Brings the Certification of Franchise to the Office of the Vice Mayor and Mayor for approval", time: "1 day after approval", responsible: "George Delizo; Manny O. Julaton" }],
      },
      {
        client: "Receives the approved franchise",
        actions: [{ action: "Issuance of Franchise", time: "10 minutes after referral", responsible: "Analyn Yllera; Raven Joie G. Abenoja" }],
      },
      {
        client: "",
        actions: [{ action: "Proceed to BPLO", fee: "PHP 500.00" }],
      },
    ],
    page: 157,
    keywords: ["tricycle", "franchise", "transfer", "deed of sale", "mtop", "trike"],
  },
  {
    id: "tricycle-franchise-change-motor",
    name: "Change Motor (Tricycle Franchise)",
    category: "transport",
    department: "sb-secretariat",
    office: "Office of the Sangguniang Bayan Secretariat",
    classification: "Highly Technical",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [
      { item: "Accomplished Application Form", whereToSecure: "SB Office" },
      { item: "Original Franchise", whereToSecure: "SB Office" },
      { item: "Original and photocopies of CR and latest OR of the old and new motorcycle" },
      { item: "Negative result of Drug test of the applicant", whereToSecure: "MHO" },
      { item: "Other documents that may be required as necessary in case of changes, i.e. deed of sale or extrajudicial settlement with the waiver of rights if the applicant is a transferee of a franchise tricycle" },
      { item: "Two (2) valid IDs" },
    ],
    steps: [
      {
        client: "Submits the requirements",
        actions: [{ action: "Checks the requirements", time: "10 minutes", responsible: "George Delizo; Raven Joie G. Abenoja" }],
      },
      {
        client: "",
        actions: [{ action: "Enactment of Franchise Resolution", time: "2-3 weeks", responsible: "SBM Members" }],
      },
      {
        client: "Affixes his/her signature",
        actions: [{ action: "Prepares Certification of Franchise for signature", time: "10 minutes", responsible: "Jelly S. Casuga; Camille F. Olitan" }],
      },
      {
        client: "",
        actions: [{ action: "Brings the Certification of Franchise to the Office of the Vice Mayor and Mayor for approval", time: "1 day after approval", responsible: "George Delizo; Manny O. Julaton" }],
      },
      {
        client: "Receives the approved franchise",
        actions: [{ action: "Issuance of Franchise", time: "10 minutes after referral", responsible: "Analyn Yllera; Raven Joie G. Abenoja" }],
      },
      {
        client: "",
        actions: [{ action: "Proceed to BPLO", fee: "PHP 500.00" }],
      },
    ],
    page: 158,
    keywords: ["tricycle", "franchise", "motor", "motorcycle", "change unit", "trike"],
  },
  {
    id: "tricycle-franchise-cessation",
    name: "Cessation (Dropping of Tricycle Franchise)",
    category: "transport",
    department: "sb-secretariat",
    office: "Office of the Sangguniang Bayan Secretariat",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [{ item: "Original Franchise" }, { item: "Original MTOP" }],
    steps: [
      {
        client: "Submits the requirements",
        actions: [{ action: "Checks the requirements", time: "10 minutes", responsible: "George Delizo; Raven Joie G. Abenoja" }],
      },
      {
        client: "Pays the required fees",
        actions: [{ action: "Assesses the fees to be collected", time: "2 minutes", responsible: "Treasury" }],
      },
      { client: "", actions: [{ action: "Receives the payment and issues an official receipt", responsible: "Treasury" }] },
      { client: "", actions: [{ action: "Prepares/Print Certification of Dropping for signature", time: "10 minutes", responsible: "Jelly Casuga; Camille F. Olitan" }] },
      { client: "", actions: [{ action: "Brings the Certification of Dropping to the Office of the Vice Mayor for approval", responsible: "George Delizo; Manny O. Julaton" }] },
      { client: "", actions: [{ action: "Issuance of Certification of Dropping", time: "5 minutes", responsible: "Atty. Dearkyle Anicee Galvez-Taqued" }] },
    ],
    page: 158,
    keywords: ["tricycle", "franchise", "drop", "dropping", "cancel", "stop", "mtop"],
  },
  {
    id: "certification-for-duplicate-copies-of-franchise",
    name: "Certification for Duplicate Copies (Tricycle Franchise)",
    category: "transport",
    department: "sb-secretariat",
    office: "Office of the Sangguniang Bayan Secretariat",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [{ item: "Original Franchise" }, { item: "Original MTOP" }],
    steps: [
      {
        client: "Submits the requirements",
        actions: [{ action: "Checks the requirements", time: "10 minutes", responsible: "George Delizo; Raven Joie G. Abenoja" }],
      },
      {
        client: "Pays the required fees",
        actions: [{ action: "Assesses the fees to be collected", time: "2 minutes", responsible: "Treasury" }],
      },
      { client: "", actions: [{ action: "Receives the payment and issues an official receipt", responsible: "Treasury" }] },
      { client: "", actions: [{ action: "Prepares/Print Certified Duplicate Copies for signature", time: "10 minutes", responsible: "Jelly Casuga; Camille F. Olitan" }] },
      { client: "", actions: [{ action: "Brings the Certified Duplicate Copies to the Secretary to the Sanggunian for signature", responsible: "George Delizo; Manny O. Julaton" }] },
      { client: "", actions: [{ action: "Issuance of Certified Duplicate Copies", time: "5 minutes", responsible: "Atty. Dearkyle Anicee Galvez-Taqued" }] },
    ],
    page: 159,
    keywords: ["tricycle", "franchise", "duplicate", "lost", "copy", "mtop"],
  },

  // ── Agriculture Office ──────────────────────────────────────────────────────
  {
    id: "technology-dissemination-services",
    name: "Technology Dissemination Services",
    category: "agriculture",
    department: "agriculture",
    office: "Municipal Agriculture Office",
    classification: "Simple",
    transactionTypes: ["G2C"],
    whoMayAvail: "Individual farmers/Farmers Association/Rural Improvement Club/Farm Youth/Government Offices and Walk-in clients",
    requirements: [],
    steps: [
      { client: "", actions: [{ action: "Assist client to log-in on the logbook", fee: "None", time: "3 minutes", responsible: "Agriculture Office Personnel" }] },
      { client: "Client fill-up information and sign in the visitors logbook", actions: [{ action: "Endorse to concern Banner program and check the availability of the material requested", fee: "None", time: "3-5 minutes", responsible: "Concern Banner Program and Municipal Agriculturist" }] },
      { client: "Receive the IEC material requested", actions: [{ action: "Release material requested", fee: "None", time: "2 minutes", responsible: "Concern Banner Program" }] },
      { client: "Client fill-up the receiving form", actions: [{ action: "Request client to fill-up the receiving form", fee: "None", time: "2 minutes", responsible: "Concern Banner Program" }] },
    ],
    notes: ["The service includes the distribution of IEC material as information advocacy to target clientele and stakeholders. These IEC materials serve as reference materials to help clients understand agricultural technologies."],
    page: 52,
    keywords: ["iec", "brochure", "farming information", "technology", "farmer"],
  },
  {
    id: "delivery-of-basic-agricultural-and-fishery-extension-services",
    name: "Delivery of Basic Agricultural and Fishery Extension Services",
    category: "agriculture",
    department: "agriculture",
    office: "Municipal Agriculture Office",
    classification: "Simple",
    transactionTypes: ["G2C"],
    whoMayAvail: "Farmers/Fisherfolks/FAs/Walk-in Clients",
    requirements: [],
    steps: [
      { client: "", actions: [{ action: "Assist client to log-in on the logbook, interview and endorse to Concern Banner Program", fee: "None", time: "3 minutes", responsible: "Agriculture Office Personnel" }] },
      { client: "Client fill-up information and sign in the visitors logbook", actions: [{ action: "Interview", fee: "None", time: "10-20 minutes", responsible: "Banner Program Focal Persons/Coordinator and Municipal Agriculturist" }] },
      { client: "Assist MAO personnel during field visit", actions: [{ action: "Field Work", fee: "None", time: "1 day", responsible: "Banner Program Focal Persons/Coordinator and Municipal Agriculturist" }] },
      { client: "", actions: [{ action: "Written report", fee: "None", responsible: "Banner Program Focal Persons/Coordinator and Municipal Agriculturist" }] },
    ],
    notes: ["The service includes technical assistance on agricultural crop establishment, pest and diseases monitoring and validation, pesticides and fertilizer recommendations, monitoring of fish catch/harvest, fishpond management, fishery and fresh water conservation technologies, etc."],
    page: 53,
    keywords: ["fishery", "fisherfolk", "fishpond", "crops", "fertilizer", "pesticide", "technical assistance", "extension"],
  },
  {
    id: "farm-inputs-assistance",
    name: "Farm Inputs Assistance",
    category: "agriculture",
    department: "agriculture",
    office: "Municipal Agriculture Office",
    classification: "Simple",
    transactionTypes: ["G2C"],
    whoMayAvail: "Individual farmers/Farmers Association/Rural Improvement Club/Farm Youth/Government Offices and Walk-in clients",
    requirements: [],
    steps: [
      { client: "", actions: [{ action: "Give the logbook and ask the client to log in the date or information requested", fee: "None", time: "5 minutes", responsible: "Agriculture Office Personnel" }] },
      { client: "Client fill-up information and sign in the visitors logbook", actions: [{ action: "Check the availability of the farm inputs requested", fee: "None", time: "5 minutes", responsible: "Agriculture Office Personnel" }] },
      { client: "Fill-up the CSF and sign in the post masterlist forms before receiving the farm inputs", actions: [{ action: "Give the Client Satisfaction Feedback (CSF)", fee: "None", time: "5 minutes", responsible: "Agriculture Office Personnel" }] },
      { client: "Receive the farm inputs requested", actions: [{ action: "Release the farm inputs requested", fee: "None", time: "5 minutes", responsible: "Agriculture Office Personnel" }] },
    ],
    notes: ["The service includes provision of seeds and seedlings, fertilizers, pesticides, fungicides, for backyard and commercial food production."],
    page: 54,
    keywords: ["seeds", "seedlings", "fertilizer", "pesticide", "fungicide", "farm inputs", "ayuda", "farmer"],
  },
  {
    id: "immunization-and-treatment-of-animals",
    name: "Immunization and Treatment of Animals",
    category: "agriculture",
    department: "agriculture",
    office: "Municipal Agriculture Office",
    classification: "Simple",
    transactionTypes: ["G2C"],
    whoMayAvail: "Individual farmers/Farmers Association/Rural Improvement Club/Farm Youth/Government Offices and Walk-in clients",
    requirements: [],
    steps: [
      { client: "", actions: [{ action: "Assist client to log-in on the log book", fee: "None", time: "3 minutes", responsible: "Agriculture Office Personnel" }] },
      { client: "Client fill-up information and sign in the visitors logbook", actions: [{ action: "Interview", fee: "None", time: "10-20 minutes", responsible: "Livestock Coordinator" }] },
      { client: "Assist Livestock Inspector during field visit", actions: [{ action: "Field Work", fee: "None", time: "1 day", responsible: "Livestock Inspector" }] },
      { client: "", actions: [{ action: "Give treatment", fee: "None", time: "1 day", responsible: "Livestock Inspector" }] },
    ],
    notes: ["The service includes consultation, immunization and medication/treatment of animals for the prevention and control of animal diseases."],
    page: 54,
    keywords: ["vaccination", "veterinary", "vet", "livestock", "animal", "pig", "cattle", "carabao", "rabies"],
  },
  {
    id: "rsbsa-and-fishr-registration",
    name: "Registration of Registry System of Basic Sector in Agriculture (RSBSA) and Fish Registration System (FishR)",
    category: "agriculture",
    department: "agriculture",
    office: "Municipal Agriculture Office",
    classification: "Simple",
    transactionTypes: ["G2C"],
    whoMayAvail: "Individual farmers/Farm Worker/Fisher folks and Agri-Youth",
    requirements: [
      { item: "2 x 2 picture" },
      { item: "Xerox copy of valid I.D." },
      { item: "Xerox copy of Tax Dec or Land Title" },
    ],
    steps: [
      { client: "", actions: [{ action: "Assist client to log-in on the log book", fee: "None", time: "3 minutes", responsible: "Agriculture Office Personnel" }] },
      { client: "Client fill-up information and sign in the visitors logbook", actions: [{ action: "Interview", fee: "None", time: "10 minutes", responsible: "Agriculture Office Personnel" }] },
      { client: "Client fill-up RSBSA Application Form/FishR Application Form", actions: [{ action: "Interview the client in filling-up the RSBSA application form/FishR application form", fee: "None", time: "10 minutes", responsible: "Agriculture Office Personnel" }] },
      { client: "Return the application form, approved/certified by the Punong Barangay, for registration", actions: [{ action: "Review the application for their Registration", fee: "None", time: "10 minutes", responsible: "Agriculture Office Personnel" }] },
      { client: "", actions: [{ action: "Review and certify the correctness of the Registration form of the farmer", fee: "None", time: "5 minutes", responsible: "Agriculture Office Personnel" }] },
      { client: "", actions: [{ action: "Endorse to Municipal Agriculturist and MAFC Chairman to sign in the Registration Form", fee: "None", time: "1 day", responsible: "Willy S. Estabillo; Imelda C. Estepa" }] },
      { client: "", actions: [{ action: "Contact client to get the approved Registration", fee: "None", time: "3 minutes", responsible: "Agriculture Office Personnel" }] },
      { client: "Receive the Registration", actions: [{ action: "Record and release the Registration", fee: "None", time: "5 minutes", responsible: "Agriculture Office Personnel" }] },
    ],
    notes: ["Covers new and existing registrations. Registration determines which farmers and fisherfolk can avail of farm inputs, fingerlings and other related programs, projects and activities."],
    page: 55,
    keywords: ["rsbsa", "fishr", "farmer registration", "fisherfolk", "fisher", "registry", "magsasaka"],
  },
  {
    id: "soil-analysis",
    name: "Soil Analysis",
    category: "agriculture",
    department: "agriculture",
    office: "Municipal Agriculture Office",
    classification: "Simple",
    transactionTypes: ["G2C"],
    whoMayAvail: "Farmers",
    requirements: [
      { group: "One (1) kilogram of air-dried soil sample with complete label as follows", item: "Name of farmer/customer" },
      { group: "One (1) kilogram of air-dried soil sample with complete label as follows", item: "Address" },
      { group: "One (1) kilogram of air-dried soil sample with complete label as follows", item: "Contact Number/email address (if any)" },
      { group: "One (1) kilogram of air-dried soil sample with complete label as follows", item: "Location of Sample Source" },
      { group: "One (1) kilogram of air-dried soil sample with complete label as follows", item: "Farm Area" },
      { group: "One (1) kilogram of air-dried soil sample with complete label as follows", item: "Date of collection of sample" },
      { group: "One (1) kilogram of air-dried soil sample with complete label as follows", item: "Crop/s to be planted (based on cropping pattern)" },
    ],
    steps: [
      { client: "", actions: [{ action: "Assist client to log-in on the log book", fee: "None", time: "3 minutes", responsible: "Agriculture Office Personnel" }] },
      { client: "Client fill-up information and sign in the visitors logbook", actions: [{ action: "Interview and endorse to concern banner program", fee: "None", time: "5 minutes", responsible: "Agriculture Office Personnel" }] },
      { client: "Submit at least one (1) kilogram of air-dried soil sample with complete sample information", actions: [{ action: "Receive, record, and inspect soil sample", fee: "None", time: "3 minutes", responsible: "Concern Banner Program" }] },
      { client: "Come back on the specified date for the result of the analysis", actions: [{ action: "Submit to DA-RFO 1 (Soil Laboratory) for Analysis", fee: "None", time: "Depends on the volume of samples to be analyzed", responsible: "DA-RFO 1 Soil Laboratory" }] },
      { client: "", actions: [{ action: "DA-RFO 1 prepares fertilizer recommendations based on the result of the soil analysis", fee: "None", time: "1 hour", responsible: "Concern Banner Program" }] },
      { client: "Acknowledge receipt of the result in the logbook", actions: [{ action: "Record and release the result of soil analysis", fee: "None", time: "3 minutes", responsible: "Concern Banner Program" }] },
    ],
    notes: ["Soil analysis determines the fertility status of the soil and the inputs required for efficient and economic production, so that enough fertilizer is applied while taking advantage of the nutrients already present."],
    page: 56,
    keywords: ["soil test", "soil sample", "fertilizer recommendation", "farm"],
  },
  {
    id: "farm-mechanization",
    name: "Farm Mechanization",
    category: "agriculture",
    department: "agriculture",
    office: "Municipal Agriculture Office",
    classification: "Simple",
    transactionTypes: ["G2C"],
    whoMayAvail: "Farmers Association",
    requirements: [
      { item: "Letter of Intent" },
      { item: "Endorsement (MA, Mayor, MAFC Chairman)" },
      { item: "Board Resolution" },
      { item: "Project Proposal" },
      { item: "Xerox Copy (SEC Registration)" },
      { item: "Xerox Copy (By-Laws)" },
      { item: "Certificate of Good Standing" },
      { item: "Financial Statement" },
      { item: "Certification/Usufruct" },
      { item: "Policy Guidelines on the Operation of machinery" },
      { item: "Farmers Profile" },
      { item: "Farmers with Corresponding Area" },
      { item: "Picture of Rice Field" },
      { item: "Picture of Garage" },
    ],
    steps: [
      { client: "", actions: [{ action: "Assist client to log-in on the log book", fee: "None", time: "3 minutes", responsible: "Agriculture Office Personnel" }] },
      { client: "Client fill-up information and sign in the visitors logbook", actions: [{ action: "Interview and validate the farm area for geo tagging", fee: "None", time: "1 day", responsible: "Agri-Infra Coordinator" }] },
      { client: "", actions: [{ action: "Check/Verify the requirements", fee: "None", time: "1 day", responsible: "Agri-Infra Coordinator" }] },
      { client: "", actions: [{ action: "Submit to DA-RFO 1 and PhilMech", fee: "None", time: "1 day", responsible: "Agri-Infra Coordinator" }] },
    ],
    notes: ["The service assists Farmers Associations to fill-up the requirements to avail of the farm mechanization program."],
    page: 57,
    keywords: ["machinery", "tractor", "harvester", "farm equipment", "farmers association", "philmech"],
  },
  {
    id: "extension-support-educational-and-training-services",
    name: "Extension Support, Educational and Training Services",
    category: "agriculture",
    department: "agriculture",
    office: "Municipal Agriculture Office",
    classification: "Simple",
    transactionTypes: ["G2C"],
    whoMayAvail: "Farmers/Fisherfolks/Farmers Associations/Rural Women and Agri-Youth",
    requirements: [{ item: "Letter of Intent", whereToSecure: "Client" }],
    steps: [
      { client: "", actions: [{ action: "Assist client to log-in on the log book", fee: "None", time: "3 minutes", responsible: "Agriculture Office Personnel" }] },
      { client: "Submit letter signifying intention to avail the service", actions: [{ action: "Receive the intent", fee: "None", time: "3 minutes", responsible: "Concern Banner Program" }] },
      { client: "Wait for further notice from MAO for the available training schedule within the year", actions: [{ action: "Request for trainings from DA-RFO 1, OPAg or propose training under MAO MOOE Fund", fee: "None", time: "2-3 weeks", responsible: "Concern Banner Program / Municipal Agriculturist" }] },
    ],
    notes: ["The service includes meetings and trainings on agri-fishery related technologies for farmers, fisherfolks, farmers associations, rural women and agri-youth."],
    page: 58,
    keywords: ["training", "seminar", "farmers", "fisherfolk", "agri-youth", "rural women"],
  },
  {
    id: "pest-and-diseases-surveillance",
    name: "Pest and Diseases Surveillance",
    category: "agriculture",
    department: "agriculture",
    office: "Municipal Agriculture Office",
    classification: "Simple",
    transactionTypes: ["G2C"],
    whoMayAvail: "Farmers/Livestock Raisers",
    requirements: [],
    steps: [
      { client: "", actions: [{ action: "Assist client to log-in on the log book", fee: "None", time: "3 minutes", responsible: "Agriculture Office Personnel" }] },
      { client: "Client fill-up and sign in the visitors logbook", actions: [{ action: "Assist client and endorse to concerned Banner Program", fee: "None", time: "3-5 minutes", responsible: "Agriculture Office Personnel" }] },
      { client: "Provide necessary information", actions: [{ action: "Interview client", fee: "None", time: "10-15 minutes", responsible: "Concerned Banner Program Coordinator/Municipal Agriculturist" }] },
      { client: "Assist the Agricultural Technologist/Livestock Inspector during the field visitation", actions: [{ action: "Field visitation and monitoring", fee: "None", time: "1 hour to 1 day", responsible: "Concerned Banner Program Coordinator/Municipal Agriculturist" }] },
      { client: "", actions: [{ action: "Recommend/Administer control measures and treatment", fee: "None", time: "30 minutes to 2 hours", responsible: "Concerned Banner Program Coordinator" }] },
    ],
    notes: ["The service includes monitoring of pests and diseases of crops and livestock, and recommendations when pests and diseases are widespread."],
    page: 58,
    keywords: ["pest", "disease", "infestation", "crop disease", "livestock disease", "monitoring"],
  },
  {
    id: "livestock-health-and-farmers-certification",
    name: "Issuance of Livestock Health and Farmers Certification",
    category: "agriculture",
    department: "agriculture",
    office: "Municipal Agriculture Office",
    classification: "Simple",
    transactionTypes: ["G2C"],
    whoMayAvail: "Farmers",
    requirements: [{ item: "Barangay Certification", whereToSecure: "Client" }],
    steps: [
      { client: "", actions: [{ action: "Assist client to log-in on the log book", fee: "None", time: "3 minutes", responsible: "Agriculture Office Personnel" }] },
      { client: "Client fill-up and sign in the visitors logbook", actions: [{ action: "Assist client and endorse to concerned personnel", fee: "None", time: "3 minutes", responsible: "Concerned Personnel" }] },
      { client: "Provide necessary requirements", actions: [{ action: "Interview client", fee: "None", time: "5 minutes", responsible: "Concerned Personnel" }] },
      { client: "", actions: [{ action: "Issue Official Receipt and record/release Livestock Health Certificate/Farmers Certification", fee: "PHP 100.00 per head of large animals; PHP 100.00 for Farmers Certification", time: "5 minutes", responsible: "Concerned Personnel" }] },
    ],
    notes: ["Farmers secure a farmers certification when availing of agricultural loans; livestock raisers secure a Livestock Health Certificate."],
    page: 59,
    keywords: ["livestock health certificate", "farmers certification", "agricultural loan", "animal"],
  },
  {
    id: "branding-of-large-animals",
    name: "Issuance of Branding of Large Animals",
    category: "agriculture",
    department: "agriculture",
    office: "Municipal Agriculture Office",
    classification: "Simple",
    transactionTypes: ["G2C"],
    whoMayAvail: "Farmers",
    requirements: [],
    steps: [
      { client: "", actions: [{ action: "Assist client to log-in on the log book", fee: "None", time: "3 minutes", responsible: "Agriculture Office Personnel" }] },
      { client: "Client fill-up and sign in the visitors logbook", actions: [{ action: "Assist client and endorse to concerned personnel", fee: "None", time: "3 minutes", responsible: "Concerned Personnel" }] },
      { client: "", actions: [{ action: "Interview client and schedule the date", fee: "None", time: "5 minutes", responsible: "Concerned Personnel" }] },
      {
        client: "",
        actions: [
          {
            action: "Issue Official Receipt",
            fee: "With molding – Liv. & Dev. Fund: PHP 20.00; Reg. Fee: PHP 25.00; With molding: PHP 60.00; Additional Ownership: PHP 70.00. Without molding – Liv. & Dev. Fund: PHP 20.00; Reg. Fee: PHP 25.00; Without molding: PHP 70.00; Additional Transfer: PHP 70.00. Certificate of Ownership: PHP 5.00; Certificate of Transfer: PHP 10.00",
            time: "10-30 minutes or depends on the number of animals branded",
            responsible: "Concerned Personnel",
          },
        ],
      },
      { client: "Come back for signing by the authorized signatories of the documents", actions: [{ action: "Give the documents to authorized signatories of the documents", fee: "None", time: "1 day", responsible: "Concerned Personnel" }] },
      { client: "", actions: [{ action: "Record and release the documents", fee: "None", time: "3 minutes", responsible: "Concerned Personnel" }] },
    ],
    notes: [
      "Farmers secure iron branding to identify the owner of large animals.",
      "The charter prints the branding fee labels and amounts in two columns that don't line up row for row; they are paired here in the order printed. Confirm the exact amounts with the Agriculture Office.",
    ],
    page: 59,
    keywords: ["branding", "cattle", "carabao", "horse", "large animals", "ownership", "transfer"],
  },
  {
    id: "extension-of-technical-assistance-on-agriculture",
    name: "Extension of Technical Assistance on Agriculture (Consultation, RCM, PCIC Insurance, Seed Distribution)",
    category: "agriculture",
    department: "agriculture",
    office: "Agriculture Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [{ item: "Varies depending on the transaction" }],
    steps: [
      {
        client: "Present the concern of your farm, crops, livestock, fishery and other agricultural related matters to the agricultural technologist of the Municipal Agriculture Office",
        actions: [
          { action: "Fill in logbook, issue queue number, conduct interview with the client and refer him/her to the concerned Agricultural Technologist", fee: "None", time: "1 minute", responsible: "Willy S. Estabillo" },
          { action: "Interviews the client to determine the problem or need", time: "5-10 minutes", responsible: "Perlita Corpuz" },
          { action: "Suggests solutions or refers the matter to the Municipal Agriculturist if he/she deems it necessary", time: "8-10 minutes", responsible: "Freddie S. Estipona" },
          { action: "Conducts farm and home visits, when necessary", time: "1-2 hours depending on the distance of the barangay from the municipal hall", responsible: "Juvy M. Aromin; Eduardo G. Pulmano; Dominador G. Pulmano; Abelardo M. Marzan, Jr.; Charlie P. Estalilla; Eleonor S. Estocapio" },
          { action: "Suggests solutions", fee: "None", time: "5 minutes", responsible: "All AEW’s concerned and Municipal Agriculturist" },
        ],
      },
      {
        client: "RCM (Rice Crop Manager)",
        actions: [
          { action: "Fill in logbook", time: "1 minute", responsible: "Lainee Grace D. Banay" },
          { action: "Interviews the client to determine the problem or need", time: "5-10 minutes", responsible: "Perlita M. Corpuz" },
          { action: "Release Result", time: "5 minutes", responsible: "Juvy M. Aromin; Freddie S. Estipona" },
        ],
      },
      {
        client: "Philippine Crop Insurance Corp. (PCIC): application for crops, livestock, fisheries and life insurance, or indemnity claims for crops, livestock, fisheries and death claims",
        actions: [
          { action: "Fill in logbook", time: "1 minute", responsible: "Willy S. Estabillo" },
          { action: "Conduct interview and verify name of farmer at RSBSA", time: "5-10 minutes", responsible: "Perlita M. Corpuz" },
          { action: "Processing of documents", time: "5 minutes", responsible: "Freddie S. Estipona; Juvy M. Aromin; Eduardo G. Pulmano; Dominador G. Pulmano; Abelardo M. Marzan, Jr.; Charlie P. Estalilla; Eleanor S. Estocapio; Lainee Grace D. Banay" },
        ],
      },
      {
        client: "Seed Distribution: rice, corn, vegetables, others",
        actions: [
          { action: "Fill in logbook", fee: "None", time: "1 minute", responsible: "Willy S. Estabillo" },
          { action: "Processing of documents", time: "5-10 minutes", responsible: "Perlita M. Corpuz" },
          { action: "Releasing of seeds", time: "5 minutes", responsible: "Freddie S. Estipona; Juvy M. Aromin; Eduardo G. Pulmano; Dominador G. Pulmano" },
        ],
      },
    ],
    notes: ["This entry covers several transactions; each step above is a separate type of request."],
    page: 60,
    keywords: ["pcic", "crop insurance", "insurance claim", "indemnity", "rcm", "rice crop manager", "seeds", "seed distribution", "farm visit", "consultation"],
  },
  {
    id: "livelihood-skills-training-one-barangay-one-product",
    name: "Livelihood and Skills Training (One Barangay, One Product)",
    category: "business",
    department: "agriculture",
    office: "Project Development & Evaluation Unit",
    classification: "Simple",
    transactionTypes: ["G2C"],
    whoMayAvail: "Marginalized sector, farmers, fisher folks, farmers associations, rural women and Agri-Youth",
    requirements: [{ item: "Letter of Intent", whereToSecure: "Client" }],
    steps: [
      { client: "", actions: [{ action: "Assist client to log-in on the log book", fee: "None", time: "3 minutes", responsible: "Emilie S. Porte" }] },
      { client: "Submit letter signifying intention to avail the service", actions: [{ action: "Receive the intent", fee: "None", time: "3 minutes", responsible: "Emilie S. Porte" }] },
      {
        client: "Prepare project proposal, submit for approval",
        actions: [
          { action: "Prepare a draft activity plan for the training and identify trainer; prepare Program of Activity; coordinate with the identified trainer and concerned participants; coordinate for the venue and identify supplies needed and snacks of trainer and participants", fee: "None", time: "1-2 weeks", responsible: "Emilie S. Porte" },
        ],
      },
      { client: "Wait for further notice from PDEU for the implementation of the project", actions: [{ fee: "None", responsible: "Emilie S. Porte" }] },
      {
        client: "Conduct of Pre-Skills Training Program",
        actions: [{ action: "Prepare documents for the evaluation; conduct self-assessment of participants for Commercial Cooking NC I", fee: "None", time: "1 day", responsible: "Emilie S. Porte" }],
      },
      {
        client: "Conduct of Skills Training Program",
        actions: [{ action: "Facilitate lecture on Current Good Manufacturing Practices with emphasis on Food Safety; facilitate skills training program", fee: "None", time: "2 days", responsible: "Emilie S. Porte" }],
      },
      {
        client: "Conduct of post skills training program",
        actions: [{ action: "Prepare consolidated post evaluation report capturing feedback from participants; conduct regular/quarterly monitoring on bottom line targets and evaluation as to the application of learning", fee: "None", time: "1 hour; regular", responsible: "Emilie S. Porte" }],
      },
    ],
    notes: ["The service includes organizing associations, conducting meetings, and facilitating skills training and upgrading on One Barangay, One Product for the marginalized sector, farmers, fisher folks, farmers associations, rural women and agri-youth."],
    page: 62,
    keywords: ["livelihood", "skills training", "obop", "one barangay one product", "msme", "cooking", "pdeu", "kabuhayan"],
  },

  // ── Assessor Office ───────────────────────────────────────────────────────
  {
    id: "assessment-reassessment-of-real-properties",
    name: "Assessment/Reassessment of Real Properties",
    category: "tax",
    department: "assessor",
    office: "Office of the Municipal Assessor",
    classification: "Complex",
    transactionTypes: ["G2C – Government to Citizen"],
    whoMayAvail: "All",
    requirements: [
      { item: "Letter request of the property owner", whereToSecure: "To be prepared by the client" },
      { item: "Latest tax declaration", whereToSecure: "Office of the Municipal Assessor" },
      { item: "Latest receipt of real property tax", whereToSecure: "Client/ Office of the Municipal Treasurer" },
    ],
    steps: [
      {
        client: "Signs in the logbook, request for reclassification of land or assessment of improvements, presents documents",
        actions: [
          { action: "Reviews the documents presented, verifies the records and records the transaction in the logbook", fee: "None", time: "15 minutes", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
        ],
      },
      {
        client: "Schedules the date of ocular inspection",
        actions: [
          { action: "Indicates in the logbook the schedule of inspection, issues the order of payment", fee: "None", time: "10 minutes", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
        ],
      },
      {
        client: "Proceeds to the Treasury Office and pays the required fees",
        actions: [
          { action: "Receives the payment and issues an official receipt (OR)", fee: "Processing Fee: PHP 200.00/RPU; Processing Fee for Declaration of Unknown Lots: PHP 1,000.00/lot; Inspection Fee: PHP 500.00/RPU; RPU Sticker: PHP 100.00/bldg.", time: "10 minutes", responsible: "Nellie F. Dilim; Ilene Asuncion I. Hulaton, Office of the Municipal Treasurer" },
        ],
      },
      {
        client: "Returns to the Assessor’s Office and submits the OR",
        actions: [
          { action: "Attaches the OR to the documents to be processed", fee: "None", time: "5 minutes", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
          { action: "Records and assigns control number per transaction and prepares individual folder and submit to person-in-charge in the transactions", fee: "None", time: "15 minutes", responsible: "Maribel E. Flores" },
          { action: "Conducts ocular inspection and gathers necessary data", fee: "None", time: "4-5 hours*", responsible: "Edel D. Mendoza; Rodolf C. Epejo; Myra-Fe D. Riñon" },
          { action: "Prepares Field Appraisal and Assessment Sheet (FAAS) and enters the same in the TMCR and presents them for review and signature of the Municipal Assessor", fee: "None", time: "3 hours", responsible: "Edel D. Mendoza; Rodolf C. Epejo; Myra-Fe D. Riñon" },
          { action: "Reviews and signs the FAAS", fee: "None", time: "30 minutes", responsible: "Myra-Fe D. Riñon" },
          { action: "Prepares transmittal and submits the document/s to the Provincial Office for the approval of the Provincial Assessor", fee: "None", time: "1 day – 5 days", responsible: "Maribel E. Flores" },
          { action: "Receives the approved document from the Provincial Assessor’s Office, records the same in the logbook", fee: "None", time: "1 hour", responsible: "Maribel E. Flores" },
        ],
      },
      {
        client: "Requests for a certified true copy of the newly-approved tax declaration",
        actions: [
          { action: "Issues order of payment depending on the types of the document/s requested", fee: "None", time: "10 minutes", responsible: "Maribel E. Flores; Rodolf C. Espejo" },
        ],
      },
      {
        client: "Proceeds to the Treasury Office and pays the required fees",
        actions: [
          { action: "Receives the payment and issues an official receipt (OR)", fee: "Certified True Copy of Tax Declarations: PHP 100.00/tax declaration", time: "10 minutes", responsible: "Nellie F. Dilim; Ilene Asuncion I. Hulaton, Office of the Municipal Treasurer" },
          { action: "Prepares the documents requested", fee: "None", time: "20 minutes/tax declaration", responsible: "Maribel E. Flores; Rodolf C. Espejo" },
        ],
      },
      {
        client: "Returns to the Assessor’s Office and submits the OR",
        actions: [
          { action: "Attaches the OR to the documents, countersigns the same and presents them to the Municipal Assessor for her signature", fee: "None", time: "5 minutes", responsible: "Maribel E. Flores; Rodolf C. Espejo" },
          { action: "Signs the document", fee: "None", time: "5 minutes", responsible: "Myra-Fe D. Riñon" },
        ],
      },
      {
        client: "Receives the document/s",
        actions: [
          { action: "Releases the document/s including all the documents presented by the client", fee: "None", time: "2 minutes", responsible: "Maribel E. Flores; Rodolf C. Espejo" },
        ],
      },
    ],
    notes: [
      "*Time varies depending on the distance/location of the properties for inspection.",
      "The charter prints the fee labels and amounts in step 3 as one list against the payment action; they are shown together on that action.",
      "The charter prints “Rodolf C. Epejo” (sic) in the inspection and FAAS rows; copied as printed.",
    ],
    page: 69,
    keywords: ["amilyar", "rpt", "tax declaration", "reassessment", "assessment", "real property", "land", "lupa"],
  },
  {
    id: "transfer-of-ownership-of-real-properties",
    name: "Processing of Transfer of Ownership of Real Properties",
    category: "tax",
    department: "assessor",
    office: "Office of the Municipal Assessor",
    classification: "Complex",
    transactionTypes: ["G2C – Government to Citizen"],
    whoMayAvail: "All",
    requirements: [
      { item: "Letter request of the property owner/authorized representative", whereToSecure: "To be prepared by the client or authorized representative" },
      { item: "Special Power of Attorney, if applicable", whereToSecure: "To be provided by the client" },
      { item: "Certified True Copy of Tax Declaration", whereToSecure: "Office of the Provincial Assessor" },
      { item: "Registered Deed of Conveyance", whereToSecure: "Registry of Deeds" },
      { item: "Official Receipt of Payment of Latest Real Property Tax", whereToSecure: "Client/ Office of the Municipal Treasurer" },
      { item: "Certificate of Transfer", whereToSecure: "Office of the Provincial Treasurer" },
      { item: "Official Receipt of Transfer Tax", whereToSecure: "Office of the Provincial Treasurer" },
      { item: "Certified Machine Copy of Title, if applicable", whereToSecure: "Registry of Deeds" },
      { item: "Approved survey plan, if applicable", whereToSecure: "DENR – Provincial Environment and Natural Resources Office" },
      { item: "Certificate Authorizing Registration", whereToSecure: "Bureau of Internal Revenue" },
    ],
    steps: [
      {
        client: "Signs in logbook, request for transfer of ownership of real property, submits requirements",
        actions: [
          { action: "Reviews the requirements presented. If complete, records the transaction in the logbook and issues order of payment. If incomplete, advises the client on the lacking requirements and return the document", fee: "None", time: "20 minutes", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
        ],
      },
      {
        client: "Proceeds to the Treasury Office and pays the required fees",
        actions: [
          { action: "Receives the payment and issues an official receipt (OR)", fee: "Processing fee of transfer (if not sale): PHP 200.00/tax declaration; Processing fee of transfer (sale only): if consideration is below PHP 100,000.00 – PHP 200.00; if consideration is PHP 100,000.00 and above – 0.20% of consideration", time: "10 minutes", responsible: "Nellie F. Dilim; Ilene Asuncion I. Hulaton, Office of the Municipal Treasurer" },
        ],
      },
      {
        client: "Returns to the Assessor’s Office and submits the OR",
        actions: [
          { action: "Attaches the OR to the documents to be processed", fee: "None", time: "5 minutes", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
          { action: "Verifies records on file", fee: "None", time: "20 minutes", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
          { action: "Assigns control number per transactions and prepares individual folder and submit to person-in-charge in the transactions", fee: "None", time: "20 minutes", responsible: "Maribel E. Flores" },
          { action: "Prepares Field Appraisal and Assessment Sheet (FAAS) and types the new transaction on the Property Record Form (PRF), enters the same in the TMCR, assigns new PIN in the map, attaches all documents and presents them for review and signature of the Municipal Assessor", fee: "None", time: "3-4 hours*", responsible: "Rodolf C. Espejo; Maribel E. Flores; Edel D. Mendoza" },
          { action: "Reviews and signs the FAAS and other documents", fee: "None", time: "30 minutes", responsible: "Myra-Fe D. Riñon" },
          { action: "Prepares transmittal and submits the document/s to the Provincial Office for the approval of the Provincial Assessor", fee: "None", time: "1 day – 5 days", responsible: "Maribel E. Flores" },
          { action: "Receives the approved document from the Provincial Assessor’s Office, records the same in the logbook", fee: "None", time: "1 hour", responsible: "Maribel E. Flores" },
        ],
      },
      {
        client: "Requests for a certified true copy of the newly-approved tax declaration",
        actions: [
          { action: "Issues order of payment, types the document/s requested", fee: "None", time: "5 minutes", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
        ],
      },
      {
        client: "Proceeds to the Treasury Office and pays the required fees",
        actions: [
          { action: "Receives the payment and issues an official receipt (OR)", fee: "Certified True Copy of Tax Declaration: PHP 100.00/tax declaration", time: "5 minutes", responsible: "Nellie F. Dilim; Ilene Asuncion I. Hulaton, Office of the Municipal Treasurer" },
          { action: "Prepares the documents requested", fee: "None", time: "20 minutes**", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
        ],
      },
      {
        client: "Returns to the Assessor’s Office and submits the OR",
        actions: [
          { action: "Attaches the OR to the documents, countersigns the same and presents them to the Municipal Assessor for her signature", fee: "None", time: "5 minutes", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
          { action: "Review and signs the document", fee: "None", time: "5 minutes", responsible: "Myra-Fe D. Riñon" },
        ],
      },
      {
        client: "Acknowledges receipt of the document/s",
        actions: [
          { action: "Releases the document/s including all the documents presented by the client", fee: "None", time: "3 minutes", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
        ],
      },
    ],
    notes: [
      "*Time varies depending on the distance/location of the properties for inspection.",
      "The charter marks one time with “**” but does not print a matching footnote.",
    ],
    page: 72,
    keywords: ["amilyar", "rpt", "tax declaration", "transfer of ownership", "transfer", "deed of sale", "lupa", "land"],
  },
  {
    id: "order-of-payment-for-real-property-tax",
    name: "Issuance of Order of Payment for Real Property Tax",
    category: "tax",
    department: "assessor",
    office: "Office of the Municipal Assessor",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    whoMayAvail: "All",
    requirements: [
      { item: "Tax declaration or previous official receipt of real property tax", whereToSecure: "To be provided by the client" },
    ],
    steps: [
      {
        client: "Signs in logbook, requests for order of payment for RPT",
        actions: [
          { action: "Inquires as to who is the declared owner and the location of the property", fee: "None", time: "10 minutes", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
          { action: "Verifies the record on file", fee: "None", time: "15 minutes*", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
          { action: "Prepares the order of payment of real property tax", fee: "None", time: "10 minutes*", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
        ],
      },
      {
        client: "Acknowledges receipt of the document/s",
        actions: [
          { action: "Releases the document/s including all the documents presented by the client", fee: "None", time: "5 minutes", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
        ],
      },
    ],
    notes: [
      "*Time varies depending on the number of properties requested for Notice of Assessment or order of payment for real property tax.",
    ],
    page: 75,
    keywords: ["amilyar", "rpt", "real property tax", "order of payment", "tax declaration", "pay amilyar"],
  },
  {
    id: "certified-true-copies-of-real-property-records",
    name: "Issuance of Certified True Copies of Real Property Records/Certifications",
    category: "tax",
    department: "assessor",
    office: "Office of the Municipal Assessor",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    whoMayAvail: "All",
    requirements: [
      { group: "If the requesting party is the declared owner", item: "Copy of tax declaration", whereToSecure: "To be provided by the client" },
      { group: "If the requesting party is the declared owner", item: "Photocopy of valid ID" },
      { group: "If the requesting party is the declared owner", item: "Latest tax receipt" },
      { group: "If the requesting party is not the declared owner", item: "Copy of tax declaration" },
      { group: "If the requesting party is not the declared owner", item: "Authorization from the declared owner with attached photocopy of 1 valid ID and photocopy of the ID of the bearer" },
      { group: "If the requesting party is not the declared owner", item: "Latest tax receipt" },
      { group: "If the declared owner is deceased", item: "Letter request of the heirs duly subscribed/ notarized (optional) with attached photocopy of valid ID of the bearer" },
      { group: "If the declared owner is deceased", item: "Copy of tax declaration" },
      { group: "If the declared owner is deceased", item: "Authorization from the heir/s or Special Power of Attorney (SPA) if the requestor is a broker or salesperson or an individual not totally related to the heir/s" },
      { group: "If the declared owner is deceased", item: "Latest tax receipt" },
      { group: "Request of a lawyer for legal purposes", item: "Copy of tax declaration" },
      { group: "Request of a lawyer for legal purposes", item: "Letter request with letterhead of the law office" },
      { group: "Request of a lawyer for legal purposes", item: "Latest tax receipt" },
      { group: "Request of a lawyer for legal purposes", item: "Authorization of the bearer from the legal counsel being an employee of the law firm/ if the bearer is not an employee of the legal counsel, authorization from the heir/s must be attached with photocopy of 1 valid ID of the bearer" },
    ],
    steps: [
      {
        client: "Signs in logbook, requests for real property records, certifications",
        actions: [
          { action: "Interviews the client and review the requirements presented, if any", fee: "None", time: "10 minutes", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
          { action: "Verifies the record/s on file, issues the order of payment", fee: "None", time: "15 minutes*", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
        ],
      },
      {
        client: "Proceeds to the Treasury Office and pays the required fees",
        actions: [
          { action: "Receives the payment and issues the official receipt", fee: "Certified True Copy of Tax Declarations: PHP 100.00/tax declaration; Certification (With/Non Encumbrance, With/Non Improvement, No Property, Landholding and latest tax declaration) with Documentary Stamp Tax: PHP 130.00/certification; Certified Photocopy: PHP 100.00/document", time: "5 minutes", responsible: "Nellie F. Dilim; Ilene Asuncion I. Hulaton, Office of the Municipal Treasurer" },
          { action: "Prepares the documents requested", time: "15 minutes*", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
        ],
      },
      {
        client: "Returns to the Assessor’s Office and submits the OR",
        actions: [
          { action: "Attaches the OR to the requested document, countersigns the document and brings the same to the Municipal Assessor for signing", time: "5 minutes", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
          { action: "Signs the document", time: "5 minutes", responsible: "Myra-Fe D. Riñon" },
        ],
      },
      {
        client: "Receives the requested document",
        actions: [
          { action: "Releases the document requested, including all documents presented by the client", time: "5 minutes", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
        ],
      },
    ],
    notes: [
      "*Time varies depending on the number of documents requested.",
      "The charter prints “None” as the fee only for the first two actions; the later actions have no fee printed.",
    ],
    page: 76,
    keywords: ["amilyar", "rpt", "tax declaration", "certified true copy", "certification", "tax map", "no property", "landholding"],
  },
  {
    id: "records-verification",
    name: "Records Verification",
    category: "tax",
    department: "assessor",
    office: "Office of the Municipal Assessor",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    whoMayAvail: "All",
    requirements: [
      { item: "Tax declaration or previous official receipt of real property tax", whereToSecure: "To be provided by the client" },
    ],
    steps: [
      {
        client: "Signs the logbook, requests for records verification, submit documents to be verified",
        actions: [
          { action: "Receives the request, receives documents presented", fee: "None", time: "10 minutes", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
          { action: "Issues the Order of Payment", fee: "None", time: "5 minutes", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
        ],
      },
      {
        client: "Proceeds to the Treasury Office and pays the required fees",
        actions: [
          { action: "Receives the payment and issues the official receipt", fee: "Verification/Research Fee: PHP 200.00", time: "3 minutes", responsible: "Nellie F. Dilim; Ilene Asuncion I. Hulaton, Office of the Municipal Treasurer" },
        ],
      },
      {
        client: "Returns to the Assessor’s Office and submits the OR",
        actions: [
          { action: "Attaches the OR to the prepared document; countersigns the same and brings it to the Municipal Assessor for signing", time: "5 minutes", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
          { action: "Conducts records verification and presents to the client", time: "45 minutes*", responsible: "Rodolf C. Espejo; Maribel E. Flores" },
        ],
      },
    ],
    notes: [
      "*Time varies depending on the number of RPUs to be verified.",
      "NOTE: If the client requests certified true copies of verified documents, the requirements and procedures for the issuance of certified true copies of real property records are applied.",
    ],
    page: 78,
    keywords: ["amilyar", "rpt", "tax declaration", "records verification", "research", "verification"],
  },
  // ── Engineering Office ────────────────────────────────────────────────────
  {
    id: "issuance-of-building-permit",
    name: "Issuance of Building Permit",
    category: "building",
    department: "engineering",
    office: "Engineering Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [
      { item: "Zoning Clearance" },
      { item: "5 sets bill of materials" },
      { item: "Fire Evaluation Clearance" },
      { item: "2 sets Structural Analysis (for 3-storey and up)" },
      { item: "5 sets of Architectural, Structural and Electrical Plan Notarized" },
      { item: "Construction Safety & Health" },
      { item: "Permit Application Forms" },
      { item: "2 Long Folder" },
      { item: "5 sets specification" },
    ],
    steps: [
      {
        client: "Submit the complete requirements.",
        actions: [
          { action: "Check/ Review requirements.", fee: "To be Determined by the System from NCBDO", time: "5 mins.", responsible: "Jennelyn N. Andal" },
          { action: "Give endorsement letter, 4 sets of plan, 1 bill of materials, specification, fire affidavit and advises the client to proceed to BFP and secure Fire Safety Evaluation Clearance." },
          { action: "Issues the order of payment (pay to Treasury Office)" },
        ],
      },
      {
        client: "Present Official Receipt (OR) from Treasury Office and copy of Fire Safety Evaluation Clearance with Official Receipt (OR) from Bureau of Fire Protection (BFP) to Engineering Staff.",
        actions: [
          { action: "Processing. Records the documents (logbook, issue Building Permit No.)", time: "5 mins.", responsible: "Engr. Froilan S. Florendo, Jr.; Jennelyn N. Andal; Celine Kylie G. Ramos; George S. Garce" },
          { action: "Approval of the Building Office." },
          { action: "Releasing." },
        ],
      },
    ],
    notes: [
      "Who may avail and where-to-secure values are blank in the charter.",
      "Where several agency actions share one table cell, the fee, time and person are printed once for the cell and are shown on its first action.",
      "The fee is printed as “To be determined by the System from NCBDO”; no amount is given.",
    ],
    page: 93,
    keywords: ["building permit", "construction", "permit", "bahay", "house", "building", "pagpapatayo"],
  },
  {
    id: "issuance-of-certificate-of-inspection",
    name: "Issuance of Certificate of Inspection",
    category: "building",
    department: "engineering",
    office: "Engineering Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [],
    steps: [
      {
        client: "Requests for Inspection of project",
        actions: [
          { action: "Inspect the project, assesses the work accomplished", fee: "None", time: "Depends on the project location", responsible: "Engr. Froilan S. Florendo Jr." },
          { action: "Prepares the statement of work accomplished", time: "3 minutes", responsible: "Jenniffer A. Flores" },
        ],
      },
      {
        client: "Signs the statement of work accomplished",
        actions: [
          { action: "Issues the Certificate of Inspection", time: "5 minutes", responsible: "Engr. Froilan S. Florendo Jr.; Jennelyn N. Andal" },
        ],
      },
    ],
    notes: [
      "The charter leaves the requirements checklist and who may avail blank.",
      "The charter prints a fee (“None”) only for the first action.",
    ],
    page: 94,
    keywords: ["certificate of inspection", "inspection", "building", "project", "engineering"],
  },
  {
    id: "issuance-of-certificate-of-acceptance",
    name: "Issuance of Certificate of Acceptance",
    category: "building",
    department: "engineering",
    office: "Engineering Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [],
    steps: [
      {
        client: "Requests for Acceptance of project",
        actions: [
          { action: "Issues the Certificate of Acceptance.", fee: "None", time: "5 minutes", responsible: "Engr. Froilan S. Florendo Jr." },
        ],
      },
    ],
    notes: ["The charter leaves the requirements checklist and who may avail blank."],
    page: 95,
    keywords: ["certificate of acceptance", "acceptance", "project", "building", "engineering"],
  },
  {
    id: "certification-for-electrical-installation",
    name: "Issuance of Certifications for Electrical Installation",
    category: "building",
    department: "engineering",
    office: "Engineering Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [
      { item: "Zoning Clearance" },
      { item: "Picture of the structure" },
    ],
    steps: [
      {
        client: "Submits the requirements",
        actions: [
          { action: "Check/ Review requirements. If complete, issues the order of payment (pay to Treasury Office).", fee: "None", time: "2 minutes", responsible: "Jennelyn N. Andal; Jenniffer A. Flores" },
        ],
      },
      {
        client: "Present Official Receipt (OR) to the Engineering staff.",
        actions: [
          { action: "Issues the certification for electrical installation. Keeps 1 set of documents on file (certification, zoning clearance, picture).", time: "5 minutes", responsible: "Jennelyn N. Andal; Jenniffer A. Flores" },
        ],
      },
    ],
    notes: [
      "Who may avail is blank in the charter.",
      "The charter prints the fee (“None”) only on the first action; the amount payable at the Treasury Office is not printed.",
    ],
    page: 95,
    keywords: ["electrical", "electrical installation", "certification", "kuryente", "wiring", "building"],
  },
  {
    id: "issuance-of-fencing-permit",
    name: "Issuance of Fencing Permit",
    category: "building",
    department: "engineering",
    office: "Engineering Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [
      { item: "Tax declaration" },
      { item: "Tax receipt" },
      { item: "Barangay clearance" },
      { item: "Affidavit of non-objection of adjoining lot owners" },
      { item: "Lot plan/ Survey plan" },
      { item: "Plan" },
    ],
    steps: [
      {
        client: "Secures application form and list of requirements for fencing permit.",
        actions: [
          { action: "Provides the client with application forms and list of requirement", fee: "None", time: "2 minutes", responsible: "Jennelyn N. Andal; Jenniffer A. Flores" },
        ],
      },
      {
        client: "Submit the complete requirements.",
        actions: [
          { action: "Check/ Review requirements. Inspect the project and issues the order of payment (pay to Treasury Office).", time: "3 hours", responsible: "Engr. Froilan S. Florendo Jr.; Jennelyn N. Andal" },
        ],
      },
      {
        client: "Present Official Receipt (OR) from Treasury Office.",
        actions: [
          { action: "Records the documents (logbook, issue Fencing Permit No.), Approval of the Building Office. Releasing", time: "2 hours", responsible: "Engr. Froilan S. Florendo Jr.; Jennelyn N. Andal" },
        ],
      },
    ],
    notes: [
      "Who may avail and where-to-secure values are blank in the charter.",
      "The charter prints a fee (“None”) only for the first step; the fencing permit fee payable at the Treasury Office is not printed.",
    ],
    page: 95,
    keywords: ["fencing permit", "fence", "bakod", "permit", "lot", "building"],
  },
  {
    id: "issuance-of-occupancy-permit",
    name: "Issuance of Occupancy Permit",
    category: "building",
    department: "engineering",
    office: "Engineering Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [
      { item: "As built plan" },
    ],
    steps: [
      {
        client: "Applies and submit complete requirements for Occupancy Permit.",
        actions: [
          { action: "Check/ Review requirements.", fee: "To be Determined by the System from NCBDO", time: "4 minutes", responsible: "Jennelyn N. Andal" },
          { action: "Issues the order of payment (pay to Treasury Office)." },
          { action: "Give endorsement letter and advises the client to proceed to BFP and secure Fire Safety Inspection Certificate." },
        ],
      },
      {
        client: "Present Official Receipt (OR) from Treasury Office and copy of Fire Safety Inspection Certificate and OR from Bureau of Fire (BFP) to Engineering Staff.",
        actions: [
          { action: "Records the documents (logbook, issues Occupancy Permit No.)", time: "4 minutes", responsible: "Engr. Froilan S. Florendo, Jr.; Jennelyn N. Andal; Celine Kylie G. Ramos; George Garce" },
          { action: "Approval of the Building Office." },
          { action: "Releasing." },
        ],
      },
    ],
    notes: [
      "Who may avail and where-to-secure values are blank in the charter.",
      "Where several agency actions share one table cell, the fee, time and person are printed once for the cell and are shown on its first action.",
      "The fee is printed as “To be determined by the System from NCBDO”; no amount is given.",
    ],
    page: 96,
    keywords: ["occupancy permit", "occupancy", "building", "permit", "fire safety inspection"],
  },
  // ── Civil Registry Office ─────────────────────────────────────────────────
  {
    id: "registration-of-birth-and-birth-certificate",
    name: "Registration of Birth and Issuance of Birth Certificate",
    category: "certificates",
    department: "civil-registry",
    office: "Civil Registry Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [
      { item: "Document to be registered (Duly certified by Municipal Health Officer/Physician and Embalmer)" },
      { group: "For late registration", item: "Four (4) copies of Certificate of Live Birth (COLB) duly accomplished and signed by the proper parties" },
      { group: "For late registration", item: "Accomplished affidavit for delayed registration (at the back of the (COLB) signed by the father, mother or guardian" },
      { group: "For late registration", item: "Negative certification of birth record from the Philippine Statistics Authority" },
      { group: "For late registration", item: "Sworn statement stating the present whereabouts of the mother (in case the party seeking the late registration of birth of an illegitimate child is not the mother)" },
      { group: "For late registration", item: "Any two of the following documentary evidence which may show the name of the child, date and place of birth and name of the mother (and name of the father, if the child has been acknowledged): baptismal certificate, school records, medical records, barangay captain’s certification, income tax return, marriage certificate, birth certificate of children and others" },
    ],
    steps: [
      {
        client: "Logs in log book",
        actions: [
          { action: "Receive and assess the requirements and interview client, issues the order of payment, prepares the document", time: "Timely: 5 minutes; Delayed: 30 minutes", responsible: "Liza R. Valenzuela; Susan Julita D. Formacion; Anita F. Las-ang Nicolas" },
        ],
      },
      {
        client: "Fills up the request slip and submits the same with the requirements",
        actions: [
          { action: "Verifies the records, issues the order of payment, prepares the document", time: "5 minutes", responsible: "Staff who attended to the client in step 1" },
        ],
      },
      {
        client: "Pays the required fees",
        actions: [
          { action: "Issues the Official Receipt (OR)", time: "2 minutes" },
        ],
      },
      {
        client: "Presents the OR to the Local Civil Registry Office (LCRO)",
        actions: [
          { action: "Affixes signature to Certificate of Live Birth, Death or Marriage", time: "5 minutes", responsible: "Verifier/MCR" },
        ],
      },
      {
        client: "Receives the document",
        actions: [
          { action: "Releases the transcription of birth, death or marriage", time: "2 minutes", responsible: "Staff who attended to the client in step 2" },
        ],
      },
    ],
    notes: [
      "The charter leaves who may avail and the fees column blank; no fee amount is printed for this service. Confirm the fee with the office.",
    ],
    page: 101,
    keywords: ["psa", "civil registry", "birth record", "live birth", "birth certificate", "late registration", "kapanganakan"],
  },
  {
    id: "registration-of-marriage-and-marriage-certificate",
    name: "Registration of Marriage and Issuance of Marriage Certificate",
    category: "certificates",
    department: "civil-registry",
    office: "Civil Registry Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    whoMayAvail: "Persons who failed to register their civil registry documents",
    requirements: [
      { item: "Four (4) copies of duly accomplished and signed civil Marriage Certificate" },
      { group: "In case of delayed registration of marriage", item: "Negative certification of marriage record from the Philippine Statistics Authority" },
      { group: "In case of delayed registration of marriage", item: "Certificate of No Marriage (CENOMAR) from the Philippine Statistics Authority" },
      { group: "In case of delayed registration of marriage", item: "Marriage License or Affidavit of Cohabitation (Article 34 of the Family Code)" },
      { group: "In case of delayed registration of marriage", item: "Residence Certificate/ Valid ID of informant" },
    ],
    steps: [
      {
        client: "Logs in log book",
        actions: [],
      },
      {
        client: "Submits requirements",
        actions: [
          { action: "Receive and assess the requirements and interview client, issues the order of payment, prepares the document", time: "Timely: 5 minutes; Delayed: 30 minutes", responsible: "Susan Julita D. Formacion; Liza R. Valenzuela; Anita F. Las-ang Nicolas" },
        ],
      },
      {
        client: "Pays the required fees",
        actions: [
          { action: "Issues the Official Receipt (OR)", time: "5 minutes" },
        ],
      },
      {
        client: "Presents the OR to the Municipal Civil Registry Office (LCRO)",
        actions: [
          { action: "Affixes signature to Certificate of Marriage", time: "5 minutes", responsible: "MCR" },
        ],
      },
      {
        client: "Receives owner’s copy of registered document",
        actions: [
          { action: "Releases owner’s copy of the registered document", time: "2 minutes", responsible: "Staff who attended to the client in step 2" },
        ],
      },
    ],
    notes: [
      "The charter prints no fee amount for this service. Confirm the fee with the office.",
      "The charter prints “Recident Certificate” and “Marriage License of Affidavit of Cohabitation”; read as “Residence Certificate” and “…or…”.",
    ],
    page: 102,
    keywords: ["marriage contract", "wedding", "kasal", "civil registry", "marriage certificate", "late registration", "psa"],
  },
  {
    id: "registration-of-death-and-death-certificate",
    name: "Registration of Death and Issuance of Death Certificate",
    category: "certificates",
    department: "civil-registry",
    office: "Civil Registry Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [
      { item: "Four (4) copies of duly accomplished and signed Certificate of Death" },
      { group: "In case of delayed registration of death", item: "Negative certification of death record from the Philippine Statistics Authority" },
      { group: "In case of delayed registration of death", item: "Affidavit for delayed registration which shall be executed by the hospital if the person died in the hospital or by the attendant at death if the person died elsewhere. In default of the hospital or attendant at death, the affidavit shall be executed by any of the nearest relative of the deceased, or by any person having legal charge of the deceased when the latter was still alive. The affidavit referred to shall state among other things, the name of the deceased, the facts of his death, the date and place of burial or cremation and the circumstances why the death was not reported for registration within 30 days after death" },
      { group: "In case of delayed registration of death", item: "Residence Certificate/ Valid ID of informant" },
      { group: "In case of delayed registration of death", item: "Burial permit/Certificate of Cremation or other means of corpse disposal" },
      { group: "In case of delayed registration of death", item: "Approval for registration by the Municipal Health Officer as indicated in the Certificate of Death (50a)" },
    ],
    steps: [
      {
        client: "Logs in log book",
        actions: [],
      },
      {
        client: "Submits requirements",
        actions: [
          { action: "Receive and assess the requirements and interview client, issues the order of payment, prepares the document", time: "Timely: 5 minutes; Delayed: 30 minutes", responsible: "Susan Julita D. Formacion; Liza R. Valenzuela; Anita F. Las-ang Nicolas" },
        ],
      },
      {
        client: "Pays the required fees",
        actions: [
          { action: "Issues the Official Receipt (OR)", fee: "For indorsement of advance copy to the PSA: Indorsement PHP 100.00; Certification PHP 130.00", time: "5 minutes" },
        ],
      },
      {
        client: "Presents the OR to the Municipal Civil Registry Office (MCRO)",
        actions: [
          { action: "Affixes signature to Certificate of Marriage", time: "5 minutes", responsible: "MCR" },
        ],
      },
      {
        client: "Receives owner’s copy of registered document",
        actions: [
          { action: "Releases owner’s copy of the registered document", time: "2 minutes", responsible: "Staff who attended to the client in step 2" },
        ],
      },
    ],
    notes: [
      "The charter prints the fees only for indorsing an advance copy to the PSA; no registration fee is printed. Confirm with the office.",
      "Step 4 reads “Affixes signature to Certificate of Marriage” in the charter (apparently copied from the marriage service); it is kept as printed.",
      "The charter places “Residence Certificate/ Valid ID of informant” inside the affidavit item; it is listed here as its own item.",
    ],
    page: 103,
    keywords: ["death record", "burial", "civil registry", "death certificate", "namatay", "late registration", "psa"],
  },
  {
    id: "issuance-of-marriage-license",
    name: "Issuance of Marriage License",
    category: "certificates",
    department: "civil-registry",
    office: "Civil Registry Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [
      { item: "One of the parties should be a resident of the municipality" },
      { item: "Certificate of Live Birth" },
      { item: "CRS Form 4 Certificate of No Marriage (CENOMAR) from PSA" },
      { item: "Community tax certificate (CEDULA)" },
      { item: "Pre-Marriage Orientation Certificate" },
      { item: "Tree Planting Certificate" },
      { item: "For foreigner applicant, Certificate of Legal Capacity to marry issued by the embassy" },
      { item: "For previously married applicant, Registered Annulment Decree, Death Certificate of deceased spouse, and/or Divorce decree for foreigner applicant" },
      { item: "For applicant aged 18-20 years old, Parental Consent" },
      { item: "For applicant aged 21-24 years old, Parental Advice" },
    ],
    steps: [
      {
        client: "Logs in log book and secures checklist of documents at the Municipal Civil Registry Office (MCRO)",
        actions: [
          { action: "Briefs client about the service", fee: "Application for Marriage License: PHP 300.00; Marriage License: PHP 300.00; Solemnization Fee – Office of the Mayor: PHP 500.00, Outside Office of the Mayor: PHP 1,000.00; Sponsorship Fee (per sponsor): PHP 50.00", time: "15 minutes", responsible: "Liza R. Valenzuela; Susan Julita D. Formacion; Anita F. Las-ang Nicolas" },
        ],
      },
      {
        client: "Submits requirements (except pre-marriage orientation certificate which may be submitted within the 10 days posting period)",
        actions: [
          { action: "Interviews and verifies submitted requirements", time: "5 minutes", responsible: "Staff who attended to the client in step 1" },
        ],
      },
      {
        client: "Fills up application form for marriage license",
        actions: [
          { action: "Reviews accomplished application form", time: "20-30 minutes", responsible: "Staff who attended to the client in step 1" },
          { action: "Advises the client that the application will be posted for 10 days" },
        ],
      },
      {
        client: "Pays the corresponding fee at the Treasury Office",
        actions: [
          { fee: "PHP 300.00", time: "10 minutes" },
        ],
      },
      {
        client: "Presents receipt to attending staff",
        actions: [
          { action: "Instructs clients to proceed to the Municipal Social Welfare and Development Office for scheduling of Pre-Marriage Counseling and to the Office of the Mayor/Municipal Trial Court/Church for scheduling of Wedding Ceremony", time: "5 minutes", responsible: "Staff who attended to the client in steps 1,2,3" },
          { action: "Posts Application for Marriage License" },
        ],
      },
      {
        client: "Pays the corresponding fees at the Treasury Office",
        actions: [
          { action: "After 10 days: Prepares and issues Marriage License", fee: "PHP 300.00", time: "5-10 minutes", responsible: "Liza R. Valenzuela; Susan Julita D. Formacion; Anita F. Las-ang Nicolas" },
        ],
      },
    ],
    notes: [
      "The charter prints all the fees in step 1’s fee cell (including solemnization and sponsorship fees) and also PHP 300.00 in steps 4 and 6. Which fee is paid at which step is not clear; confirm with the office.",
      "Who may avail is blank in the charter.",
      "Where several agency actions share one table cell, the time and person are printed once for the cell and are shown on its first action.",
    ],
    page: 104,
    keywords: ["marriage license", "kasal", "wedding", "civil registry", "marriage", "cenomar", "pre-marriage"],
  },
  {
    id: "transcription-of-birth-death-marriage-certificates",
    name: "Issuance of Transcription of Birth, Death and Marriage Certificates",
    category: "certificates",
    department: "civil-registry",
    office: "Civil Registry Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [
      { item: "Valid identification (ID) card" },
      { item: "Authorization letter (if the person is not the owner of the document nor he/she is the spouse/child/parent of the owner of said document)" },
    ],
    steps: [
      {
        client: "Logs in log book",
        actions: [
          { action: "Interviews client as to what document is needed and for what purpose (whether local or abroad)", time: "15 minutes", responsible: "Liza R. Valenzuela; Susan Julita D. Formacion; Anita F. Las-ang Nicolas" },
        ],
      },
      {
        client: "Fills up the request slip and submits the same with the requirements",
        actions: [
          { action: "Verifies the records, issues the order of payment, prepares the document", time: "5 minutes", responsible: "Staff who attended to the client in step 1" },
        ],
      },
      {
        client: "Pays the required fees",
        actions: [
          { action: "Issues the Official Receipt (OR)", fee: "For abroad: PHP 150.00; For local: PHP 100.00; Documentary stamp: PHP 30.00", time: "2 minutes" },
        ],
      },
      {
        client: "Presents the OR to the Local Civil Registry Office (LCRO)",
        actions: [
          { action: "Affixes signature to Certificate of Live Birth, Death or Marriage", time: "5 minutes", responsible: "Verifier/MCR" },
        ],
      },
      {
        client: "Receives the document",
        actions: [
          { action: "Releases the transcription of birth, death or marriage", time: "2 minutes", responsible: "Staff who attended to the client in the previous steps" },
        ],
      },
    ],
    notes: [
      "Step 1 time is printed as “I5 minutes”; read as 15 minutes.",
      "Who may avail is blank in the charter.",
    ],
    page: 106,
    keywords: ["psa", "civil registry", "birth record", "death record", "marriage contract", "transcription", "certified copy", "birth certificate"],
  },
  {
    id: "legitimation-of-birth",
    name: "Legitimation of Birth",
    category: "certificates",
    department: "civil-registry",
    office: "Civil Registry Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [
      { item: "Advisory on Marriage (CRS Form 5)" },
      { item: "Marriage Certificate" },
      { item: "Birth Certificate of the Child" },
      { item: "Affidavit of Legitimation executed by the Father and Mother" },
    ],
    steps: [
      {
        client: "Logs in log book and secures checklist of documents at the Municipal Civil Registry Office (MCRO)",
        actions: [
          { action: "Briefs clients about the service", time: "10 minutes", responsible: "Liza R. Valenzuela; Susan Julita D. Formacion; Anita F. Las-ang Nicolas" },
        ],
      },
      {
        client: "Submits all the required documents",
        actions: [
          { action: "Reviews documents and interviews client", time: "10-15 minutes", responsible: "Staff who attended to the client in step 1" },
        ],
      },
      {
        client: "Pays the corresponding fees at the Treasury Office",
        actions: [
          { action: "Registers the Affidavit of Legitimation in the Registry Book for Legal Instruments", fee: "Registration Fee: PHP 500.00; Certification: PHP 100.00; Copy of Certificate of Live Birth: PHP 100.00", time: "20-30 minutes", responsible: "Staff who attended to the client in steps 1 and 2; MCR" },
          { action: "Makes marginal annotation in the Certificate of Live Birth of the child to be legitimated" },
          { action: "Certifies that the Affidavit of Legitimation is registered in the Registry Book" },
          { action: "Prepares indorsement of the documents to the Office of the Civil Registrar General-Philippine Statistics Authority (OCRG-PSA)" },
        ],
      },
      {
        client: "Presents the official receipt to the staff",
        actions: [
          { action: "Shows documents to client for review of entries", time: "10 minutes", responsible: "Staff who attended to the clients in steps 1-3; MCR" },
          { action: "Releases personal copies of the documents to client" },
          { action: "Places documents for endorsement to the OCRG-PSA inside a pre-addressed envelope and gives the same to client for mailing" },
          { action: "Informs client on the date when the annotated document is available at the PSA which is one (1) month after mailing." },
        ],
      },
    ],
    notes: [
      "Where several agency actions share one table cell, the fee, time and person are printed once for the cell and are shown on its first action.",
      "Who may avail is blank in the charter.",
    ],
    page: 106,
    keywords: ["legitimation", "civil registry", "birth record", "psa", "annotation", "affidavit of legitimation"],
  },
  {
    id: "petition-ra-9048-ra-10172",
    name: "Grant of Petition Under RA 9048 and RA 10172 (Correction of Clerical Error, Change of First Name, Correction of Day/Month of Birth or Sex)",
    category: "certificates",
    department: "civil-registry",
    office: "Civil Registry Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [
      { group: "For correction of clerical or typographical error (RA 9048)", item: "Certificate (birth/marriage/death) on PSA Security Paper containing the entry or entries sought to be corrected or change" },
      { group: "For correction of clerical or typographical error (RA 9048)", item: "With at least 2 public or private documents as supporting documents showing the correct entry or entries upon which the correction or change shall be based: Baptismal Certificate; Marriage Certificate; Voters Affidavit; Employment record; GSIS/SSS Record; Medical Record; Business Record; School Record; Driver’s License; Insurance; Civil Registry records of ascendants; Land Titles; Certificates of Land Transfer; NBI/Police Clearance; Other documents considered relevant/necessary by the Municipal Civil Registrar" },
      { group: "For change of first name (RA 9048)", item: "Birth Certificate on Security Paper" },
      { group: "For change of first name (RA 9048)", item: "Police Clearance" },
      { group: "For change of first name (RA 9048)", item: "NBI Clearance" },
      { group: "For change of first name (RA 9048)", item: "Certificate of Employment or Affidavit of Non-Employment Certificate" },
      { group: "For change of first name (RA 9048)", item: "Affidavit of Publication/Newspaper clippings. Publication: local newspaper for 2 consecutive weeks; national newspaper (publication shall be done only once) for Migrant Petition" },
      { group: "For change of first name (RA 9048)", item: "Supporting documents: Baptismal Certificate; School Records; Identification Cards; Special power of attorney (SPA) if the petitioner is not the owner of the document or the owner’s spouse, children, brothers, sisters, grandparents, or guardian" },
      { group: "For correction of clerical or typographical error in the day and month in the date of birth or sex of a person (RA 10172)", item: "Earliest school record or earliest school documents" },
      { group: "For correction of clerical or typographical error in the day and month in the date of birth or sex of a person (RA 10172)", item: "Medical records" },
      { group: "For correction of clerical or typographical error in the day and month in the date of birth or sex of a person (RA 10172)", item: "Baptismal certificate/Certificate of Dedication" },
      { group: "For correction of clerical or typographical error in the day and month in the date of birth or sex of a person (RA 10172)", item: "Marriage certificate" },
      { group: "For correction of clerical or typographical error in the day and month in the date of birth or sex of a person (RA 10172)", item: "Voter’s registration record" },
      { group: "For correction of clerical or typographical error in the day and month in the date of birth or sex of a person (RA 10172)", item: "Valid IDs (SSS, GSIS, Company I.D., PRC ID, Senior Citizen ID, Voter’s I.D., Driver’s License)" },
      { group: "For correction of clerical or typographical error in the day and month in the date of birth or sex of a person (RA 10172)", item: "Police Clearance" },
      { group: "For correction of clerical or typographical error in the day and month in the date of birth or sex of a person (RA 10172)", item: "NBI Clearance" },
      { group: "For correction of clerical or typographical error in the day and month in the date of birth or sex of a person (RA 10172)", item: "Certificate of Employment/ Affidavit of Non-Employment" },
      { group: "For correction of clerical or typographical error in the day and month in the date of birth or sex of a person (RA 10172)", item: "Affidavit of Publication" },
    ],
    steps: [
      {
        client: "Logs in log book and secures checklist of documents at the Municipal Civil Registry Office (MCRO)",
        actions: [
          { action: "Gives a briefing about the service", time: "15 minutes", responsible: "Anita F. Las-ang Nicolas" },
        ],
      },
      {
        client: "Submits all the required documents",
        actions: [
          { action: "Reviews documents and undertakes interview", time: "20-30 minutes", responsible: "Anita F. Las-ang Nicolas" },
        ],
      },
      {
        client: "Pays the corresponding fees at the Treasury Office",
        actions: [
          { action: "Prepares petition", fee: "Correction of Clerical Error (RA 9048) Filing Fee: PHP 1,000.00; Change of First Name (RA 9048) Filing Fee: PHP 3,000.00; Correction in the Day and Month or Sex of a person (RA 10172): PHP 3,000.00; Certificate of Finality: PHP 500.00; Migrant Petition Service Fee: PHP 500.00", time: "10-15 minutes", responsible: "Anita F. Las-ang Nicolas" },
        ],
      },
      {
        client: "Returns to MCRO and submits the official receipt",
        actions: [
          { action: "Shows petition documents to client for review of entries", time: "10-15 minutes", responsible: "Anita F. Las-ang Nicolas" },
          { action: "Informs client on the date of release in conformity with the required ten (10) consecutive days posting and 5 days within which the Municipal Civil Registrar shall act on the petition for correction of clerical errors/ ten (10) consecutive days posting, publication of at least once a week for two (2) consecutive weeks in a newspaper of general circulation and 5 days within which the Municipal Civil Registrar shall act on the petition after completion of all requirements for change of first name and for correction of clerical or typographical error in the day and month in the date of birth or sex of a person" },
          { action: "Posts petition", time: "1 minute", responsible: "Anita F. Las-ang Nicolas" },
          { action: "After 10 days (for correction of clerical or typographical error); 21 days (for change of first name/ correction of clerical or typographical error in the day and month in the date of birth or sex of a person): Decides on the petition", time: "1 minute", responsible: "Anita F. Las-ang Nicolas" },
        ],
      },
      {
        client: "Returns to the MCRO and claims copy of granted petition (MCRO level) on the appointed date then signs in the logbook as proof of receipt",
        actions: [
          { action: "Transmits a copy of the decision together with the records of the proceedings to the Office of the Civil Registrar General (OCRG) for affirmation within 5 working days from the date of the decision", time: "5 minutes", responsible: "Anita F. Las-ang Nicolas" },
        ],
      },
      {
        client: "Mails the granted petition to the OCRG and keeps the receipt together with the duplicate copy of the mailed documents",
        actions: [],
      },
      {
        client: "May follow up the action of the CRG on the decision of the MCR on the petition that is supposed to have been mailed to the MCRO when he/she is not informed of it within the expected period",
        actions: [
          { action: "After 2 to 3 months: Informs the client of the action of the CRG on the decision of the MCR on the petition that is mailed to the Municipal Civil Registry Office (MCRO)", time: "5-10 minutes", responsible: "Anita F. Las-ang Nicolas" },
          { action: "Briefs client on the annotation of the document containing the correction by the Philippine Statistics Authority, after which, client requests for the annotated copy from any PSA outlet" },
        ],
      },
      {
        client: "Mails to the OCRG the certificate of finality, record sheet and annotated certificate of document together with the endorsement letter",
        actions: [
          { action: "If the decision of the MCR on the petition is affirmed by the OCRG: Prepares the certificate of finality, record sheet and annotated document by the Municipal Civil Registrar and prepares endorsement letter for transmittal to the PSA-Regional Statistical Service Office 1", time: "30 minutes", responsible: "Anita F. Las-ang Nicolas" },
        ],
      },
      {
        client: "Files through the MCRO, within 15 days from receipt of the impugned petition, a motion for reconsideration with additional supporting documents to the OCRG and waits for the reconsideration of the impugned petition.",
        actions: [
          { action: "If the decision of the MCR on the petition is impugned by the OCRG: Prepares the motion for reconsideration/justification and transmits the same to the OCRG.", time: "30 minutes to 1 hour", responsible: "Anita F. Las-ang Nicolas" },
        ],
      },
      {
        client: "After one month: Claims at PSA, the request for the annotated document in security paper",
        actions: [],
      },
    ],
    notes: [
      "The charter prints all the fee labels and amounts for this service in one merged cell that spans the first four steps (with the last amount carried onto the next page). They are shown together on the “Prepares petition” action, which is the step where the client pays at the Treasury Office. Confirm which fee applies with the office.",
      "Where several agency actions share one table cell, the time and person are printed once for the cell and are shown on its first action.",
      "Who may avail is blank in the charter.",
      "The “after 10 days / 21 days” label is printed as its own row before “Decides on the petition”; it is folded into that action.",
    ],
    page: 108,
    keywords: ["correction", "clerical error", "change first name", "ra 9048", "ra 10172", "civil registry", "birth certificate", "wrong spelling", "psa", "change sex"],
  },

  // ── Health Office ─────────────────────────────────────────────────────────
  {
    id: "sanitary-permit-and-health-certificate",
    name: "Issuance of Sanitary Permit and Health Certificate",
    category: "health",
    department: "health",
    office: "Health Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [],
    steps: [
      {
        client: "Go to MHO admission area and secure a checklist of requirements for securing sanitary permit and health certificate",
        actions: [
          { action: "Issues checklist of requirements", fee: "Sanitary Permit: PHP 40.00; Health Certificate: PHP 100.00", time: "5 minutes", responsible: "Raul Ojascastro, Sanitary Inspector; Marie Ann Gapasin, Sanitary Inspector; Joan Rose Beltran, Sanitary Inspector" },
        ],
      },
      {
        client: "Proceed to the environmental sanitation room at the Municipal Health Office for assessment",
        actions: [
          { action: "Assess the completeness of the clients’ documents", time: "10 minutes", responsible: "Raul Ojascastro, Sanitary Inspector; Marie Ann Gapasin, Sanitary Inspector; Joan Rose Beltran, Sanitary Inspector" },
        ],
      },
      {
        client: "Proceed processing of requirements/documents and laboratory exams. Non-food handlers: drug test, sputum exam. Food handlers: drug test, sputum exam, fecalysis, urinalysis, Hepatitis A. Wait for the release of laboratory results and schedule for physical examination and ocular inspection on the business location",
        actions: [
          { action: "Advise client of the release of laboratory results", time: "45 minutes", responsible: "Cleofe Baltazar, Municipal Medical Technologist" },
          { action: "Advise schedule for physical examination to Municipal Health Officer and Sanitary Inspector conduct inspection on the business location", time: "All Day Round", responsible: "Raul Ojascastro, Sanitary Inspector; Marie Ann Gapasin, Sanitary Inspector; Joan Rose Beltran, Sanitary Inspector" },
        ],
      },
      {
        client: "Return to the RHU on the scheduled date to secure laboratory results to undergo physical examinations",
        actions: [
          { action: "Municipal Health Officer performs physical examination", time: "20 minutes", responsible: "Cleofe Baltazar, Municipal Medical Technologist; Teofilo Severo E. Dumaguin Jr., M.D." },
        ],
      },
      {
        client: "If there are no advance findings, you will be issued a sanitary permit and health certificate",
        actions: [
          { action: "Issue sanitary permit and health certificate", time: "5 minutes", responsible: "Raul Z. Ojascastro, Sanitary Inspector; Marie Ann B. Gapasin, Sanitary Inspector; Joan Rose S. Beltran, Sanitary Inspector" },
        ],
      },
      {
        client: "If there are findings, take note of the corrective measures to comply with the Sanitation Code Standard of the Philippines.",
        actions: [
          { action: "Sanitary Inspector briefs client of the process", time: "10 minutes", responsible: "Raul Ojascastro, Sanitary Inspector; Marie Ann Gapasin, Sanitary Inspector; Joan Rose Beltran, Sanitary Inspector" },
        ],
      },
    ],
    notes: [
      "The charter prints no requirements checklist or “Who may avail” for this service; the checklist is issued in step 1.",
      "Both fees are printed in the step 1 row (Issues checklist of requirements); the charter does not say at which step they are paid, and laboratory exam fees are not listed. Confirm with the office.",
    ],
    page: 122,
    keywords: ["sanitary permit", "health card", "food handler", "medical certificate", "establishment", "business", "health certificate"],
  },
  {
    id: "out-patient-consultation",
    name: "Out-Patient Consultation",
    category: "health",
    department: "health",
    office: "Health Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [],
    steps: [
      {
        client: "Secures patient admission number",
        actions: [
          { action: "Provides the patient with a number on a first-come-first-served basis", fee: "PHP 40.00", time: "10 seconds", responsible: "Gemma Raguindin; Diana Grace Yan; Rex Mark Castillo" },
        ],
      },
      {
        client: "Waits for his/her number to be called",
        actions: [
          { time: "Depends on the number of patients waiting", responsible: "Gemma Raguindin; Diana Grace Yan; Rex Mark Castillo" },
          { action: "Calls the number of the patient to be admitted" },
        ],
      },
      {
        client: "Approaches the information table",
        actions: [
          { action: "Asks for any records brought by the patient and if the patient is an old patient or a new patient. If old, locates the family record. If new, prepares family record. If a Philhealth enrollee, enters the patient data at the PHIC logbook. Admits the patient and requires him/her to pay the required fees", time: "5 minutes and 30 seconds", responsible: "Gemma Raguindin; Diana Grace Yan; Rex Mark Castillo" },
        ],
      },
      {
        client: "Pays the required fees",
        actions: [
          { action: "Receives the payment and issues the OR", time: "2 minutes", responsible: "Treasury" },
        ],
      },
      {
        client: "Waits for his turn for consultation",
        actions: [
          { time: "Depends on the number of patients waiting" },
          { action: "Consults the patient and provides necessary medical treatment", time: "10 minutes", responsible: "Dr. Teofilo Severo E. Dumaguin Jr" },
        ],
      },
      {
        client: "Proceeds to the laboratory, if required",
        actions: [
          { action: "Assesses the required fees", time: "20 seconds", responsible: "Cleofe M. Baltazar; Katrina S. Chan; Marjorie V. Estepa; Mary Rose A. De La Cruz" },
        ],
      },
      {
        client: "Pays the required fees",
        actions: [
          { action: "Receives the payment and issues the OR", time: "20 seconds", responsible: "Treasury" },
        ],
      },
      {
        client: "Presents the OR",
        actions: [
          { action: "Extracts/collects the necessary specimen, advises the patient to return or wait for the result, whichever is applicable", time: "1 minute", responsible: "Cleofe M. Baltazar; Katrina S. Chan; Marjorie V. Estepa" },
        ],
      },
      {
        client: "Returns to the Consultation Area with the result of the laboratory examination",
        actions: [
          { action: "Reviews, examines the laboratory result, issues prescription medicines, refers the patient to his/her hospital of choice, when necessary", time: "3 minutes", responsible: "Dr. Teofilo Severo E. Dumaguin Jr." },
        ],
      },
      {
        client: "Present drug prescription at the Botika ng Taumbayan transaction window",
        actions: [
          { action: "Assess the prescribed medicines and provide to the patient if the medicine is available. Give proper instructions on drug administration. Advise follow-up after the treatment", time: "3 minutes", responsible: "Gemma Raguindin; Diana Grace Yan; Rex Mark Castillo" },
        ],
      },
    ],
    notes: [
      "The charter prints no requirements checklist or “Who may avail” for this service.",
      "PHP 40.00 is printed in the first row only (admission number). The charter does not say whether this is the whole consultation fee, and laboratory fees are not listed.",
    ],
    page: 124,
    keywords: ["checkup", "check-up", "doctor", "nurse", "sick", "clinic", "konsulta"],
  },
  {
    id: "tb-dots",
    name: "TB-DOTS",
    category: "health",
    department: "health",
    office: "Health Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [],
    steps: [
      {
        client: "Proceeds to NTP Room",
        actions: [
          { action: "Ask and assess patient on clinical signs and symptoms of PTB", fee: "None", time: "5 minutes", responsible: "Eleanor Mendoza; Mario Angelo Estillore" },
        ],
      },
      {
        client: "Answers and presents chest x-ray result",
        actions: [
          { action: "If the patient is symptomatic, request for Xpert MTB Rif Test. If the patient is symptomatic with chest X-ray finding suggestive of TB request for Xpert MTB Rif Test. Instructs patients proper specimen collection", time: "10 minutes", responsible: "Eleanor Mendoza; Mario Angelo Estillore" },
        ],
      },
      {
        client: "Submits specimen",
        actions: [
          { action: "Receives and prepares endorsement of specimen to ITRMC", time: "5 minutes", responsible: "Eleanor Mendoza; Mario Angelo Estillore" },
        ],
      },
      {
        client: "Waits for the release of his/her result",
        actions: [
          { action: "Informs patient the result", time: "2-3 days", responsible: "Eleanor Mendoza; Mario Angelo Estillore" },
        ],
      },
      {
        client: "Enrolls in the TB-DOTS program",
        actions: [
          { action: "Initiation of treatment and information the dates of sputum follow-ups", time: "1 hour", responsible: "Eleanor Mendoza; Mario Angelo Estillore" },
        ],
      },
    ],
    notes: ["The charter prints no requirements checklist or “Who may avail” for this service. “NONE” is printed in the fee column of the first row only."],
    page: 125,
    keywords: ["tb", "tuberculosis", "ubo", "sputum", "lung", "dots", "ntp"],
  },
  {
    id: "pre-marriage-orientation-and-counselling",
    name: "Pre-marriage Orientation and Counselling",
    category: "health",
    department: "health",
    office: "Health Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [],
    steps: [
      {
        client: "Client proceeds the admission desk of MHO after their application of marriage license",
        actions: [
          { action: "Interviews, requests for the referral of the Civil Registry Office and asks to answer the Marriage Expectation Inventory Form", fee: "None", time: "1 minute", responsible: "Gemma Raguindin; Diana Grace Yan" },
        ],
      },
      {
        client: "Answers the Marriage Expectation Inventory Form",
        actions: [
          { time: "20 minutes", responsible: "Gemma Raguindin; Diana Grace Yan" },
          { action: "Provide schedule of counseling and advised for certification of tree planting being issued by the barangay", time: "1 minute", responsible: "Gemma Raguindin; Diana Grace Yan" },
        ],
      },
      {
        client: "Proceeds to counselling at the Local Population Office at the scheduled date",
        actions: [
          { action: "Conducts the Pre-Marriage Orientation and Counselling. Issues charge slip", time: "2 – 3 hours", responsible: "Darmaine G. Aromin" },
        ],
      },
      {
        client: "Pays the required fees",
        actions: [
          { action: "Receives the payment and issues the OR", time: "20 seconds", responsible: "Treasury" },
        ],
      },
      {
        client: "Presents the OR",
        actions: [
          { action: "Issues Certificate of Compliance", time: "5 minutes", responsible: "Darmaine G. Aromin" },
        ],
      },
    ],
    notes: [
      "The charter prints no requirements checklist or “Who may avail”. Step 2 mentions a barangay certification of tree planting and step 1 a referral from the Civil Registry Office.",
      "The amount of the fee paid in step 4 is not printed.",
    ],
    page: 126,
    keywords: ["pre-marriage", "marriage", "kasal", "counseling", "orientation", "marriage license", "certificate of compliance"],
  },
  {
    id: "dental-check-up-and-tooth-extraction",
    name: "Dental Check-up and Tooth Extraction",
    category: "health",
    department: "health",
    office: "Health Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [],
    steps: [
      {
        client: "Client proceeds the Dentist’s Room and secure a patient number",
        actions: [
          { action: "Provide the patient with a number on a first-come-first-served basis", fee: "None", time: "10 seconds", responsible: "Rommel Flora" },
        ],
      },
      {
        client: "Waits for his turn for consultation",
        actions: [
          { time: "Depends on the number of patients waiting" },
          { action: "Consults the patient and provides necessary dental assessment, issues charge slip if tooth extraction is needed", time: "5 minutes", responsible: "Dr. Rubymar Estabillo" },
        ],
      },
      {
        client: "Pays the required fees",
        actions: [
          { action: "Receives the payment and issues the OR", time: "2 minutes", responsible: "Treasury" },
          { action: "Provide tooth extraction and prescribes analgesics and antibiotics", time: "30 minutes", responsible: "Dr. Rubymar Estabillo" },
        ],
      },
      {
        client: "Present drug prescription at the Botika ng Taumbayan transaction window",
        actions: [
          { action: "Assess the prescribed medicines and provide to the patient if the medicine is available. Give proper instructions on drug administration", time: "3 minutes", responsible: "Gemma Raguindin; Diana Grace Yan; Rex Mark Castillo" },
        ],
      },
    ],
    notes: [
      "The charter prints no requirements checklist or “Who may avail”. “NONE” is printed in the fee column of the first row only; the extraction fee paid in step 3 is not printed.",
      "The title is printed at the bottom of PDF page 126; the table is on page 127.",
    ],
    page: 126,
    keywords: ["dental", "dentist", "tooth", "extraction", "bunot", "ngipin", "check-up"],
  },
  {
    id: "birthing",
    name: "Birthing",
    category: "health",
    department: "health",
    office: "Health Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [],
    steps: [
      {
        client: "Proceeds to Labor/ Recovery Room",
        actions: [
          { action: "Interviews, requests for the necessary records from the client. Secures admission forms, consent and prepares Partograph", fee: "None", time: "10 seconds", responsible: "Midwife on Duty" },
        ],
      },
      {
        client: "Waits for full cervical dilatation",
        actions: [
          { action: "Assesses and monitors progress of labor.", time: "Depends on the progress of labor", responsible: "Midwife on Duty" },
        ],
      },
      {
        client: "Proceeds to Delivery Room. Performs bearing down",
        actions: [
          { action: "Assist in delivering the baby and placenta. Performs immediate Newborn Care and Immediate Postpartum Care", time: "Depends on the mechanism of labor", responsible: "Midwife on Duty" },
        ],
      },
      {
        client: "Proceeds to Labor/Recovery Room",
        actions: [
          { action: "Monitors mother and child’s vital signs and other signs of complications or distress with instructions on breastfeeding and family planning", time: "23 hours", responsible: "Midwife on Duty" },
        ],
      },
    ],
    notes: ["The charter prints no requirements checklist or “Who may avail” for this service. “NONE” is printed in the fee column of the first row only."],
    page: 127,
    keywords: ["birthing", "panganganak", "manganak", "delivery", "midwife", "maternity", "buntis"],
  },

  // ── Planning and Development Office ───────────────────────────────────────
  {
    id: "issuance-of-locational-clearance",
    name: "Issuance of Locational Clearance",
    category: "building",
    department: "planning",
    office: "Planning and Development Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [
      { item: "Duly accomplished application form" },
      { item: "Affidavit of ownership/consent, whichever is applicable" },
      { item: "Title/Tax Declaration of the land where the project is to be located" },
      { item: "Barangay clearance from the barangay where the project is to be located" },
      { item: "Community tax certificate of the applicant" },
      { item: "Official receipt of real property tax payments (up to the current year)" },
      { item: "Plans, location map, cost estimates" },
    ],
    steps: [
      {
        client: "Secures an application form and list of requirements",
        actions: [
          { action: "Provides the applicant with an application form and the list of requirements", time: "1 minute", responsible: "Zoning Inspector" },
        ],
      },
      {
        client: "Submits the duly accomplished application form with the complete set of requirements",
        actions: [
          { action: "Receives the application with the requirement. Acknowledges receipt of the documents by writing his complete name and affixing his signature and the date and time of receipt", time: "5 minutes", responsible: "Zoning Inspector" },
          { action: "Returns the documents to the client if the same is not complete indicating the lacking requirements or the reason for returning the same" },
          { action: "Inspects the location of the proposed project/construction, prepares the evaluation report and the order of payment", time: "1 hour*", responsible: "Zoning Inspector" },
          { action: "Approves the evaluation report and the order of payment. In case of disapproval, returns the same indicating the reason/s for the disapproval and the step that should be taken by the applicant", fee: "Refer to the fee schedule in Figure #1 (see notes)", time: "1 minute", responsible: "Zoning Inspector; Zoning Officer" },
          { action: "Issues the order of payment", time: "1 minute", responsible: "Zoning Inspector" },
          { action: "Prepares the locational clearance", time: "1 minute", responsible: "Zoning Inspector" },
        ],
      },
      {
        client: "Pays the required fees",
        actions: [
          { action: "Receives the payment and issues the OR", time: "5 minutes", responsible: "Revenue Collection Clerk (MTO)" },
        ],
      },
      {
        client: "Presents the OR to the MPDO staff",
        actions: [
          { action: "Encodes the OR number and amount paid in the space provided for in the locational clearance", time: "30 seconds", responsible: "Zoning Inspector" },
          { action: "Approves the locational clearance", time: "30 seconds", responsible: "Zoning Officer" },
        ],
      },
      {
        client: "Acknowledges receipt of the locational clearance by affixing his/her signature in the logbook",
        actions: [
          { action: "Enters the data about the locational clearance and releases the document", time: "1 minute", responsible: "Zoning Inspector" },
        ],
      },
    ],
    notes: [
      "The fee column says “*Refer fees in figure #1”. Figure #1 (page 136): Commercial building: Php 1,000.00 for project cost of Php 100,000.00 and below; over that, Php 1,000 + 1/10 of 1% of cost in excess of Php 100,000.00; plus University of the Philippines Legal Research Fee (UPLRF) of 1% and a Subscription Fee of Php 50.00. Residential building: Php 100.00 for project cost of Php 100,000.00 and below; over that, Php 100.00 + 1/10 of 1% (of cost in excess of Php 100,000.00); plus UPLRF 1% and Subscription Fee Php 50.00. Institutional building: Php 400.00 for project cost of Php 100,000.00 and below; over that, Php 400.00 + 1/10 of “15” of cost (printed as is, likely 1%); plus UPLRF 1% of the amount in excess of Php 100,000.00 and Subscription Fee Php 50.00. Industrial building: Php 400.00 for project cost of Php 100,000.00 and below; over that, Php 400 + 1% of cost; plus UPLRF 1% and Subscription Fee Php 50.00. The printed text is unclear about what the 1% UPLRF is based on; confirm with the office.",
      "The inspection time is printed as “1 hour*” but the charter prints no footnote for the asterisk.",
      "The charter prints no “Who may avail” and no “where to secure” values for this service. The charter’s own fee reference is on page 136.",
    ],
    page: 134,
    keywords: ["locational clearance", "zoning", "building", "construction", "lot", "lupa", "permit"],
  },
  {
    id: "issuance-of-zoning-certification",
    name: "Issuance of Zoning Certification",
    category: "building",
    department: "planning",
    office: "Planning and Development Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [
      { item: "Duly accomplished and notarized application form" },
      { item: "Affidavit of ownership if the applicant is the owner of the land; Special Power of Attorney (SPA) for representatives" },
      { item: "A certified true copy of the Original Certificate of Title (OCT)/ Transfer Certificate of Title (TCT)/ Tax Declaration (TD); *If the applicant is not registered owner, a duly notarized copy of the Contract of Lease or Deed of Absolute Sale" },
      { item: "Survey plan" },
      { item: "Barangay Clearance" },
      { item: "Tax receipt of the latest Real Tax payment" },
      { item: "Community tax certificate" },
    ],
    steps: [
      {
        client: "Submit application form with the complete documentary requirements",
        actions: [
          { action: "Receives and review completeness of documentary requirements submitted", time: "7 minutes", responsible: "Juan Paulo Dumaguing; Mark Jonathan Genove" },
          { action: "*Returns the submitted documentary requirements to the client if the same is not complete indicating the lacking requirements of the reason for returning the same" },
          { action: "Verifies the location of the proposed project as to its zoning classification in the approved Comprehensive Land Use Plan. Inspects the location of the proposed projects as deemed necessary", time: "10 minutes", responsible: "Engr. Vondeimarr P. Perez" },
          { action: "Prepares and issues the Order of Payment", time: "2 minutes", responsible: "Engr. Vondeimarr P. Perez" },
          { action: "Release the Order of Payment to the client", fee: "Zoning Certification: PHP 100.00; Documentary Stamp Tax: PHP 30.00", time: "1 minute", responsible: "Juan Paulo Dumaguing; Mark Jonathan Genove" },
        ],
      },
      {
        client: "Pays the required fees at the Treasury Office",
        actions: [
          { action: "Receives the payment and issues the official receipt", time: "3 minutes", responsible: "Treasury Office" },
          { action: "Encodes the OR No. and amount paid in the space provided for in the Zoning Certification", time: "1 minute", responsible: "Juan Paulo Dumaguing; Mark Jonathan Genove" },
          { action: "Approves the Zoning Certification", time: "5 minutes", responsible: "Dr. Joy P. Flores" },
        ],
      },
      {
        client: "Acknowledges receipt of the Zoning Certification by affixing his/her signature in the logbook",
        actions: [
          { action: "Enters the data and release the document", time: "1 minute", responsible: "Juan Paulo Dumaguing; Mark Jonathan Genove" },
        ],
      },
      {
        client: "Acknowledges receipt of the locational clearance by affixing his/her signature in the logbook",
        actions: [
          { action: "Approves the locational clearance", time: "30 seconds", responsible: "Zoning Officer" },
          { action: "Enters the data about the locational clearance and releases the document", time: "1 minute", responsible: "Zoning Inspector" },
        ],
      },
    ],
    notes: [
      "The charter prints no “Who may avail” and no “where to secure” values for this service.",
      "The last two rows (approving and releasing the “locational clearance”) repeat the Locational Clearance service and look copied into this table by mistake. They are kept as printed under a fourth step; confirm with the office.",
      "The fees (Zoning Certification PHP 100.00, Documentary Stamp Tax PHP 30.00) are printed in the agency-action text of the “Release the Order of Payment” row, not in the fee column.",
    ],
    page: 136,
    keywords: ["zoning", "zoning certification", "lot", "lupa", "land use", "certification", "clup"],
  },
  {
    id: "provision-of-municipal-data",
    name: "Provision of Municipal Data",
    category: "records",
    department: "planning",
    office: "Planning and Development Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [],
    steps: [
      {
        client: "Presents the Permit to Conduct Study/ Research. Signs-in the logbook indicating the data being availed of/ requested",
        actions: [
          { action: "Determine the availability of data being requested", time: "5 minutes", responsible: "For Municipal and Barangay Socio-Economic Data: Juan Paulo Dumaguing; Mark Jonathan Genove. For Zoning/Land Use and Development Concerns: Engr. Vondeimarr P. Perez" },
        ],
      },
      {
        client: "If the data available is in soft copy, the client provides for a storage device or email address where the data will be copied or be sent. If the data is available in hard copy, the client leaves an ID card with the service provider and have the data be photocopied",
        actions: [
          { action: "Copy the data to the provided storage device or instruct on the photocopying the data", time: "5-10 minutes", responsible: "The person-in-charge where the data is being secured as stated above" },
        ],
      },
      {
        client: "Signs-in in the logbook indicating the data being availed of/ requested",
        actions: [
          { action: "Verify the correctness of the details written on the logbook", time: "1 minute", responsible: "The person-in-charge where the data is being secured as stated above" },
        ],
      },
    ],
    notes: [
      "The charter prints no requirements checklist or “Who may avail”. Step 1 refers to a Permit to Conduct Study/Research, which the charter does not say where to get.",
      "No fee is printed; photocopying costs, if any, are not stated.",
    ],
    page: 138,
    keywords: ["municipal data", "statistics", "research", "thesis", "study", "profile", "data"],
  },
  {
    id: "issuance-of-locational-clearance-for-building-permit",
    name: "Issuance of Locational Clearance for Building Permit",
    category: "building",
    department: "planning",
    office: "Planning and Development Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [
      { item: "One (1) copy of duly accomplished and notarized Unified Application Form for Building Permit" },
      { item: "Affidavit of ownership if the applicant is the owner of the land or Affidavit of consent if the applicant is not the owner of the land" },
      { item: "A certified true copy of the Original Certificate of Title (OCT)/ Transfer Certificate of Title (TCT)/ Tax Declaration (TD) (If the applicant is not the registered owner, a duly notarized copy of the Contract of Lease or Deed of absolute Sale)" },
      { item: "One (1) set of Building Plans signed by the owner and sealed by Architect/Engineer" },
      { item: "Program of Works/Cost Estimates" },
      { item: "Barangay Clearance" },
      { item: "Tax receipt of the latest Real Property Tax payment" },
      { item: "Community Tax Certificate" },
      { item: "Other documents as may be deemed necessary" },
    ],
    steps: [
      {
        client: "Forwards to the MPDO personnel the following documentary requirements for further evaluation",
        actions: [
          { action: "Verifies the correctness of the submitted documentary requirements and valuates if the proposed project conforms and/ or is allowed in its chosen location as per the approved Comprehensive Land Use Plan. *Returns the submitted documentary requirements to the client if the same is not complete indicating the lacking requirements or the reason for returning the same. For applications with deficiencies, a comprehensive correction sheet and/ or a notice of disapproval by the Zoning Officer will be given to the applicant. Prepares and issues Order of Payment", time: "5 hours", responsible: "Engr. Vondeimarr P. Perez" },
        ],
      },
      {
        client: "Releases the Order of Payment to the client",
        actions: [
          { action: "Conduct on-site inspection", time: "1 hour", responsible: "Engr. Vondeimarr P. Perez" },
          { action: "Prepares the Site Inspection/ Evaluation Report and the Locational Clearance and forwards it to the Zoning Officer for approval", time: "5 minutes", responsible: "Engr. Vondeimarr P. Perez" },
          { action: "If the application is non-conforming to the CLUP, the Zoning Office will issue the result of its review to the applicant and inform the OBO. The OBO will then inform the BFO, which will then cease evaluating the application." },
          { action: "Approves the Locational Clearance and forwards the same to the Office of the Building Official", time: "5 minutes", responsible: "EnP Joy P. Flores" },
        ],
      },
    ],
    notes: [
      "The charter prints no “Who may avail”, no “where to secure” values and no fee for this service. The documentary requirements are printed inside the client-step cell and are listed here as requirements.",
      "The second client step (“Releases the Order of Payment to the client”) is printed as is; the charter does not show a payment step or an official receipt for this service.",
      "The charter uses the abbreviations OBO (Office of the Building Official, per the previous row) and BFO without spelling out BFO.",
    ],
    page: 138,
    keywords: ["locational clearance", "building permit", "construction", "zoning", "obo", "house", "bahay"],
  },
  {
    id: "burial-application",
    name: "Burial Application",
    category: "social",
    department: "planning",
    office: "Planning and Development Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    requirements: [
      { item: "Duly accomplished application form" },
      { item: "Death Certificate" },
      { item: "Valid ID of the applicant" },
    ],
    steps: [
      {
        client: "Submits the duly accomplished application form with the complete requirements: Death Certificate; Valid ID of the applicant",
        actions: [
          { action: "Evaluate the completeness of the submitted documents and encode the details provided by the client in the log file. *Returns the documents to the client if the is not complete indicating the lacking requirements of the reason for returning the same", time: "3 minutes", responsible: "Juan Paulo Dumaguing; Mark Jonathan Genove" },
        ],
      },
      {
        client: "Proceeds to the treasury Office to pay the required fees. Presents the Official Receipt to the person-in-charge in the MPDO (Cemetery Management Unit)",
        actions: [
          { action: "Receives the payment and issues an Official Receipt", fee: "Refer to the schedule of fees in Figure #2 (see notes)", responsible: "Treasury Office" },
          { action: "Prints and releases the Entry Pass (schedule of burial). Prepares the Contract of Lease and have the applicant go over it before affixing his/her signature", responsible: "Cresencia V. Ylarde" },
        ],
      },
      {
        client: "Affixes his/her signature in the Contract of Lease",
        actions: [
          { action: "Endorses the Contract of Lease to the Office of the Mayor for signature. Once signed, advise the applicant to have the Contract of Lease notarized", time: "5 minutes", responsible: "Cresencia V. Ylarde" },
        ],
      },
      {
        client: "Have the Contract of Lease notarized and furnish a copy to the person-in-charge in the MPDO (Cemetery Management Unit)",
        actions: [
          { action: "Have the client sign-in in the logbook", responsible: "Cresencia V. Ylarde; Juan Paulo Dumaguing; Mark Jonathan Genove" },
        ],
      },
    ],
    notes: [
      "The charter prints no “Who may avail”. The application form is mentioned in the first client step but is not part of a printed checklist.",
      "Schedule of fees, New Naguilian Cemetery (Figure #2, page 141), regular rate / senior citizen rate (with 20% discount): Apartment type niche (lease period 5 years contract): 1st level PHP 6,000.00 / PHP 4,800.00; 2nd level PHP 4,800.00 / PHP 3,840.00; 3rd level PHP 4,200.00 / PHP 3,360.00; 4th level PHP 3,800.00 / PHP 3,040.00. Child burial (lease period 5 years contract): PHP 4,000.00. Bone chamber/ossuary (perpetual use): PHP 4,500.00 per cell. Ground burial (perpetual use): PHP 40,000.00 (marked “not yet available”). Exhumation permit fee: PHP 100.00. Exhumation fee: PHP 1,000.00.",
      "The rows that print and release the Entry Pass and prepare the Contract of Lease begin the next page and have no client step and no time. They are placed under step 2, following the payment, which is the most likely reading.",
    ],
    page: 140,
    keywords: ["burial", "cemetery", "libing", "patay", "niche", "sementeryo", "death"],
  },
  {
    id: "issuance-of-municipal-id-tattan-naguilian-id",
    name: "Issuance of Municipal ID (Tattan Naguilian ID)",
    category: "social",
    department: "planning",
    office: "Information and Tourism Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    whoMayAvail: "All Concerned Local Residents",
    requirements: [
      { item: "Duly accomplished application form" },
      { item: "Community tax certificate of the applicant" },
    ],
    steps: [
      {
        client: "Request for Municipal ID or Tattan Naguilian ID",
        actions: [
          { action: "Request for the Requirements", fee: "New: None; Replacement: PHP 200.00", time: "1 minute", responsible: "Mark Genove; Juan Paulo Dumaguing" },
        ],
      },
      {
        client: "Submits the requirements",
        actions: [
          { action: "Receives the requirements and give him/her the GIS SLIP to be fill-up", time: "1-3 minutes", responsible: "Mark Genove; Juan Paulo Dumaguing" },
        ],
      },
      {
        client: "Sign the form and submit",
        actions: [
          { action: "Search and Verification of Clients Identity for Municipal ID Application.", time: "1-3 minutes", responsible: "Mark Genove; Juan Paulo Dumaguing" },
          { action: "Encodes/Updates data in the ID System of the Clients information and release the clients Municipal ID.", time: "2-5 minutes", responsible: "Mark Genove; Juan Paulo Dumaguing" },
        ],
      },
      {
        client: "Receive the Municipal ID",
        actions: [],
      },
    ],
    notes: [
      "The printed office is the Information and Tourism Office, which is listed under the Planning and Development Office section of the charter.",
      "The fee cell spans the first two rows (New: NONE; Replacement: PHP 200.00); it is placed on the first row. The charter does not say where the replacement fee is paid.",
    ],
    page: 141,
    keywords: ["municipal id", "tattan naguilian id", "id", "identification", "resident", "tattan", "replacement"],
  },
  {
    id: "issuance-of-working-permit-tricycle-drivers-and-operator",
    name: "Issuance of Working Permit (Tricycle Driver’s and Operator)",
    category: "transport",
    department: "planning",
    office: "Information and Tourism Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    whoMayAvail: "All Concerned Local Residents",
    requirements: [
      { item: "Mayor’s Permit" },
      { item: "Driver’s License (must be Professional Driver’s License)" },
      { item: "Police Clearance" },
      { item: "Health Certificate" },
    ],
    steps: [
      {
        client: "Request for Working Permit (Tricycle)",
        actions: [
          { action: "Request for the requirements", time: "1 minute", responsible: "Mark Genove; Juan Paulo Dumaguing" },
        ],
      },
      {
        client: "Submits the requirements for Working permit",
        actions: [
          { action: "Receives the requirements and prepares the Working permit", time: "1-3 minutes", responsible: "Mark Genove; Juan Paulo Dumaguing" },
          { action: "Sign the working permit.", time: "2-5 minutes", responsible: "Hon. Nieri T. Flores" },
        ],
      },
      {
        client: "Received the Working Permit",
        actions: [],
      },
    ],
    notes: [
      "The printed office is the Information and Tourism Office, which is listed under the Planning and Development Office section of the charter.",
      "No fee is printed for this service, and no “where to secure” values are given for the requirements.",
    ],
    page: 142,
    keywords: ["working permit", "tricycle", "driver", "operator", "trike", "mayor’s permit", "franchise"],
  },

  // ── Office for Market Operation ───────────────────────────────────────────
  {
    id: "issuance-of-market-certification",
    name: "Issuance of Market Certification",
    category: "business",
    department: "market",
    office: "Market Management Unit",
    classification: "Simple",
    transactionTypes: ["Government to Citizen"],
    whoMayAvail: "Market leaseholders/ vendors",
    requirements: [
      { item: "Market rental, electric bills, and leasehold rights Official Receipts" },
    ],
    steps: [
      {
        client: "Submit filled-up form together with market rental receipts, electric bills and leasehold rights official receipt for verification",
        actions: [
          { action: "Verification of accounts", time: "3 minutes", responsible: "Herminia Agnes S. Carigo" },
          { action: "Check if no violation of Market Code and Municipal Ordinances", time: "3 minutes", responsible: "Herminia Agnes S. Carigo" },
          { action: "Prepares Market Certification for stall owners", time: "5 minutes", responsible: "Rosemarie Estepa; Herminia Agnes S. Carigo" },
        ],
      },
      {
        client: "Pays the required fees at the Treasury Office/ Market Management Office for certifications",
        actions: [
          { action: "Receives the payment and issues the official receipt", time: "5 minutes", responsible: "Treasury Personnel; Rosemarie Estepa" },
          { action: "Printing, recording, signing, and releasing of market certification", time: "2 minutes", responsible: "Herminia Agnes S. Carigo" },
        ],
      },
      {
        client: "Acknowledges receipt of Market Certification by affixing his/her signature in the duplicate copy",
        actions: [],
      },
    ],
    notes: [
      "The charter lists this service for market leaseholders and vendors only, but marks it “Government to Citizen”.",
      "The fee amount is not printed.",
    ],
    page: 148,
    keywords: ["market certification", "stall", "vendor", "palengke", "market", "leasehold", "certificate"],
  },
  {
    id: "order-of-payments-for-stall-rentals-leasehold-rights-transfer-fees-and-electric-bills",
    name: "Issuance of Order of Payments for Stall Rentals, Leasehold Rights, Transfer Fees and Electric Bills",
    category: "business",
    department: "market",
    office: "Market Management Unit",
    classification: "Simple",
    transactionTypes: ["Government to Citizen"],
    whoMayAvail: "Market leaseholders/ vendors",
    requirements: [],
    steps: [
      {
        client: "Stall owners/lessees ask for order of payments",
        actions: [
          { action: "Prepares of payments for stall rentals, leasehold rights, transfer fees and electric bills", fee: "None", time: "3 minutes", responsible: "Rosemarie Estepa; Analiza Flora" },
        ],
      },
      {
        client: "Receives Order of Payments",
        actions: [
          { action: "Issues Order of Payments", fee: "None", time: "3 minutes", responsible: "Rosemarie Estepa; Analiza Flora" },
        ],
      },
      {
        client: "Pays the required fees at Treasury Office",
        actions: [
          { time: "3 minutes", responsible: "Treasury Personnel" },
        ],
      },
    ],
    notes: [
      "The charter prints no requirements; the “where to secure” column shows only “Naguilian Public Market, Market Office”.",
      "The amounts of the stall rental, leasehold, transfer and electric fees are not printed.",
    ],
    page: 149,
    keywords: ["stall rental", "order of payment", "market", "palengke", "leasehold", "transfer fee", "electric bill"],
  },
  {
    id: "payment-of-fees-and-charges-market",
    name: "Payment of Fees and Charges (Market)",
    category: "business",
    department: "market",
    office: "Market Management Unit",
    classification: "Simple",
    transactionTypes: ["Government to Citizen"],
    whoMayAvail: "Market leaseholders/ vendors",
    requirements: [],
    steps: [
      {
        client: "Register in the client’s logbook",
        actions: [
          { action: "Assist client in accomplishing information in the logbook", fee: "None", time: "3 minutes", responsible: "Analiza Flora" },
        ],
      },
      {
        client: "Client’s show the order of payments/ citation tickets issued and pays the required fees at the Market office/Treasury Office",
        actions: [
          { action: "Receives the payment and issues official receipts", time: "3 minutes", responsible: "Herminia Agnes S. Carigo; Rosemarie Estepa; Analiza Flora" },
        ],
      },
      {
        client: "Receives Official Receipts",
        actions: [],
      },
    ],
    notes: [
      "The charter prints no requirements; the “where to secure” column shows only “Naguilian Public Market, Market Office”. The fee amounts are not printed.",
    ],
    page: 149,
    keywords: ["market fees", "citation ticket", "payment", "stall", "palengke", "vendor", "official receipt"],
  },
  {
    id: "calibration-and-sealing-of-weights-and-measure",
    name: "Calibration and Sealing of Weights and Measure",
    category: "business",
    department: "market",
    office: "Market Management Unit",
    classification: "Simple",
    transactionTypes: ["Government to Citizen"],
    whoMayAvail: "Market leaseholders/ vendors",
    requirements: [
      { item: "Weights and measure" },
    ],
    steps: [
      {
        client: "Register in the client’s logbook",
        actions: [
          { action: "Assist client in accomplishing information in the logbook", time: "3 minutes", responsible: "Analiza Flora; Telesforo Ordono" },
        ],
      },
      {
        client: "",
        actions: [
          { action: "Checking/ calibration and testing of weights and measure", time: "8 minutes", responsible: "Telesforo Ordono" },
          { action: "Sealing of weights and measures with the official sticker", responsible: "Telesforo Ordono" },
          { action: "Issue order of payments", time: "1 minute", responsible: "Analiza Flora; Herminia Agnes S. Carigo" },
        ],
      },
      {
        client: "Pays the required fees for sealing",
        actions: [
          { action: "Receives the payment and issues the official receipt", time: "2 minutes", responsible: "Rosemarie Estepa; Analiza Flora; Herminia Agnes S. Carigo" },
        ],
      },
      {
        client: "Receives the weights and measures sealed and calibrated",
        actions: [],
      },
    ],
    notes: [
      "The charter prints no fee schedule or fee amount for the sealing fee, and no fee column values for this service. The page was checked visually.",
      "Client step 2 is printed with an empty client cell; the agency actions under it are kept together as step 2.",
    ],
    page: 150,
    keywords: ["weights and measures", "timbangan", "scale", "calibration", "sealing", "vendor", "palengke"],
  },

  // ── Social Welfare Office ─────────────────────────────────────────────────
  {
    id: "issuance-of-gis-social-case-study-report",
    name: "Issuance of GIS/Social Case Study Report, Certification and Letter for Referral Assistance",
    category: "social",
    department: "social-welfare",
    office: "Municipal Social Welfare and Development Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    whoMayAvail: "Indigent and/or client in Crisis Situation",
    requirements: [
      { item: "Endorsement letter of the Punong Barangay", whereToSecure: "Barangay Office" },
      { item: "Indigent Certificate" },
      { item: "Photocopy of 2 valid ID cards" },
      { group: "Other requirements for hospital bill", item: "Medical Certificate", whereToSecure: "Hospital where patient is/was confined" },
      { group: "Other requirements for hospital bill", item: "Promissory Note" },
      { group: "Other requirements for hospital bill", item: "Proof of Billing/Statement of Account" },
      { group: "Other requirement for burial assistance", item: "Certified True Copy of Death Certificate", whereToSecure: "Municipal Civil Registry Office" },
      { group: "Other requirement for medicine", item: "Latest Prescription", whereToSecure: "Hospital where patient is/was confined" },
      { group: "Other requirement, if referral", item: "Personal letter" },
      { group: "Other requirement, if referral", item: "Medical Abstract", whereToSecure: "Hospital where patient is/was confined" },
      { group: "Other requirement, if referral", item: "Whole body picture for wheelchair or prosthesis" },
      { group: "Other requirement, if referral", item: "Police blotter, for accident and victim/s of fire", whereToSecure: "PNP-Municipal Police Station" },
      { group: "Other requirement, if referral", item: "BFP Certificate for victim/s of fire", whereToSecure: "Bureau of Fire Protection Office" },
    ],
    steps: [
      {
        client: "Request for assistance",
        actions: [
          { action: "Provide the requirements needed", fee: "None", time: "5 minutes", responsible: "Dexter Flora" },
        ],
      },
      {
        client: "Go back to the MSWD Office to submit the requirements needed",
        actions: [
          { action: "Review the requirements submitted", time: "10 minutes", responsible: "Dexter Flora" },
          { action: "Interview the client", time: "1 hour", responsible: "Hilda Bancifra; Mibhar John Mendoza" },
          { action: "Prepare SCSR/Certificate/Letter", time: "3 days", responsible: "Hilda Bancifra; Mibhar John Mendoza" },
          { action: "Processing: review, signature, recording, contact the client", time: "3 days", responsible: "Wilhemia Areola; Dexter Flora" },
        ],
      },
      {
        client: "Go back to the MSWD Office to receive the documents needed for assistance",
        actions: [
          { action: "Released to the client", time: "5 minutes", responsible: "Dexter Flora" },
        ],
      },
    ],
    notes: [
      "The charter prints no total time. SCSR means Social Case Study Report.",
      "The “Other requirements” are listed by purpose (hospital bill, burial, medicine, referral). Bring the ones that match your request.",
    ],
    page: 163,
    keywords: ["social case study","gis","certificate of indigency","referral","indigent","ayuda","tulong","wheelchair"],
  },
  {
    id: "extend-financial-assistance",
    name: "Extend Financial Assistance for Medical, Hospitalization, Burial, Educational and Livelihood",
    category: "social",
    department: "social-welfare",
    office: "Municipal Social Welfare and Development Office",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    whoMayAvail: "Indigent and/or client in Crisis Situation",
    requirements: [
      { item: "Endorsement letter of the Punong Barangay", whereToSecure: "Barangay Office" },
      { item: "Indigent Certificate" },
      { item: "Photocopy of 2 valid ID cards" },
      { group: "Other requirements for hospital bill", item: "Medical Certificate", whereToSecure: "Hospital where patient is/was confined" },
      { group: "Other requirements for hospital bill", item: "Promissory Note" },
      { group: "Other requirements for hospital bill", item: "Proof of Billing/Statement of Account" },
      { group: "Other requirement for burial assistance", item: "Certified True Copy of Death Certificate", whereToSecure: "Municipal Civil Registry Office" },
      { group: "Other requirement for medicine", item: "Latest Prescription", whereToSecure: "Hospital where patient is/was confined" },
      { group: "Other requirement for livelihood", item: "List of items for Livelihood Assistance" },
      { group: "Other requirement for education", item: "Certificate of Enrollment or Enrollment Assessment Form", whereToSecure: "School where the beneficiary is studying" },
      { group: "Other requirement for education", item: "Statement of account, for college" },
      { group: "Other requirement for education", item: "Valid School ID of the Beneficiary" },
      { group: "Other requirements for assistive device", item: "Medical Abstract", whereToSecure: "Hospital where patient is/was confined" },
      { group: "Other requirements for assistive device", item: "Whole body picture for wheelchair or prosthesis" },
    ],
    steps: [
      {
        client: "Request for assistance",
        actions: [
          { action: "Provide the requirements needed", fee: "None", time: "5 minutes", responsible: "Dexter Flora" },
        ],
      },
      {
        client: "Go back to the MSWD Office to submit the requirements needed",
        actions: [
          { action: "Review the requirements submitted", time: "10 minutes", responsible: "Dexter Flora" },
          { action: "Interview the client", time: "1 hour", responsible: "Hilda Bancifra; Mibhar John Mendoza" },
          { action: "Prepare SCSR/Certificate/Letter", time: "3 days", responsible: "Hilda Bancifra; Mibhar John Mendoza" },
          { action: "Processing: review, signature, recording, contact the client", time: "3 days", responsible: "Wilhemia Areola; Dexter Flora" },
        ],
      },
      {
        client: "Go back to the MSWD Office to receive the documents needed for assistance",
        actions: [
          { action: "Released to the client", time: "5 minutes", responsible: "Dexter Flora" },
        ],
      },
    ],
    notes: [
      "The charter prints no total time and does not state the amount of assistance. SCSR means Social Case Study Report.",
      "The “Other requirements” are listed by type of assistance. Bring the ones that match your request.",
    ],
    page: 164,
    keywords: ["aics","financial assistance","burial","medical assistance","hospital bill","ayuda","tulong","educational assistance"],
  },
  // ── Treasury Office ───────────────────────────────────────────────────────
  {
    id: "collection-of-real-property-taxes",
    name: "Collection of Real Property Taxes",
    category: "tax",
    department: "treasury",
    office: "Office of the Municipal Treasurer / Revenue Generation",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Client"],
    whoMayAvail: "All Concerned Local Residents",
    requirements: [
      { item: "Notice of Assessment and/or Tax Bill", whereToSecure: "Office of the Municipal Assessor" },
    ],
    steps: [
      {
        client: "Informs the staff on his/her intention to pay Real Property Tax (RPT)",
        actions: [
          { action: "Either requires the tax payer to secure notice of assessment and/or tax bill from the Assessor’s Office, if the same is not yet with the client or the client’s previous official receipt", fee: "Computed based on assessed value of the property", time: "3 minutes", responsible: "Nellie F. Dilim; Ilene A.I. Hulaton; Ruby G. Galvan" },
        ],
      },
      {
        client: "Presents the notice of assessment and/or tax bill secured from the Assessor’s Office or official receipt from previous payment of the property",
        actions: [
          { action: "Searches the desired Real Property Unit to be taxed from the system/Real Property Tax Register (RPTAR) and computes based on assessed value of the real property", time: "15 minutes", responsible: "Nellie F. Dilim; Ilene A.I. Hulaton; Ruby G. Galvan" },
        ],
      },
      {
        client: "",
        actions: [
          { action: "Receives the payment and issues the official receipt to the taxpayer", time: "2 minutes", responsible: "Nellie F. Dilim; Ilene A.I. Hulaton; Ruby G. Galvan" },
        ],
      },
    ],
    totalTime: "20 minutes",
    notes: [
      "The fee is printed once, in a cell that spans all three steps, so it is shown on the first action only.",
      "ABOUT THE SERVICE: Real property tax is levied on land, buildings, improvements and machinery, and is paid by the property owner. Rates follow Section 233 of the Local Government Code of 1991. An additional 1% of assessed value goes to the Special Education Fund.",
      "The checklist is printed as “As Notice of Assessment and/or Tax Bill”; the leading “As” is dropped here.",
    ],
    page: 170,
    keywords: ["rpt","amilyar","land tax","property tax","house tax"],
  },
  {
    id: "collection-of-other-taxes-fees-and-charges",
    name: "Collection of Other Taxes, Fees and Charges",
    category: "tax",
    department: "treasury",
    office: "Office of the Municipal Treasurer / Revenue Generation",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Client"],
    whoMayAvail: "All Concerned Local Residents",
    requirements: [
      { item: "Present order of payment", whereToSecure: "Concerned Office/s" },
    ],
    steps: [
      {
        client: "Presents order payment secured from the concerned office",
        actions: [
          { action: "Receives the order of payment", fee: "Computed from different fees desired to be paid", time: "1 minute", responsible: "Nellie F. Dilim; Ilene A.I. Hulaton; Ruby G. Galvan; Marites G. Estanislao; Aris A. Rimando" },
        ],
      },
      {
        client: "Pays the amount as indicated in the order of payment",
        actions: [
          { action: "Issues the Official Receipt to the client", time: "1 minute", responsible: "Nellie F. Dilim; Ilene A.I. Hulaton; Ruby G. Galvan; Marites G. Estanislao; Aris A. Rimando" },
        ],
      },
    ],
    totalTime: "2 minutes",
    notes: [
      "The fee is printed once, in a cell that spans both steps, so it is shown on the first action only.",
      "ABOUT THE SERVICE: Fees are issued based on the approved ordinance.",
    ],
    page: 171,
    keywords: ["fees","charges","order of payment","official receipt","pay","bayad","tax"],
  },
  {
    id: "issuance-of-community-tax-certificates",
    name: "Issuance of Community Tax Certificates",
    category: "tax",
    department: "treasury",
    office: "Office of the Municipal Treasurer / Revenue Generation",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Client"],
    whoMayAvail: "All Concerned Local Residents",
    requirements: [
      { item: "Information required to be filled up to the Certificate", whereToSecure: "N/A" },
    ],
    steps: [
      {
        client: "Fill out personal information in a piece of paper at the counter and submit it to the collector",
        actions: [
          { action: "Computes the amount to be paid based on the information submitted, informs the client and process the Community Tax Certificate", fee: "Based on gross receipts or earnings derived from business and/or salaries derived from exercise of profession and/or income from real property plus basic community tax", time: "3 minutes", responsible: "Marites G. Estanislao; Aris A. Rimando" },
        ],
      },
      {
        client: "Affix the signature and thumb mark on three (3) copies of the Community Tax Certificate (CTC)",
        actions: [
          { action: "The collector signs for the Municipal Treasurer", time: "5 minutes", responsible: "Marites G. Estanislao; Aris A. Rimando" },
        ],
      },
      {
        client: "Pays the amount computed by and receives the Community Tax Certificate (CTC)",
        actions: [
          { action: "Issues the Community Tax Certificate (CTC)", time: "2 minutes", responsible: "Marites G. Estanislao; Aris A. Rimando" },
        ],
      },
    ],
    totalTime: "10 minutes",
    notes: [
      "The fee is printed once, in a cell that spans all three steps, so it is shown on the first action only.",
      "ABOUT THE SERVICE: The CTC is issued to individuals 18 years old and above and serves as proof of residence. It is paid at the start of the year; after February 28 a monthly penalty interest is imposed on the total tax due.",
      "Rates as printed: for individuals, P5.00 basic fee plus P1.00 for every P1,000.00 of the previous year’s income; for corporations, P500.00 basic fee plus P2.00 for every P5,000.00 of the previous year’s income.",
    ],
    page: 171,
    keywords: ["ctc","cedula","sedula","residence certificate"],
  },
  {
    id: "issuance-of-business-permit-new",
    name: "Issuance of Business Permit (New)",
    category: "business",
    department: "treasury",
    office: "Office of the Municipal Treasurer / Business Permit and Licensing",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Client", "G2B – Government to Business"],
    whoMayAvail: "All Concerned Local Residents",
    requirements: [
      { item: "Filled-up Unified Form", whereToSecure: "Applicable for walk-in clients only / BPLO" },
      { item: "Business Name Registration Certificate", whereToSecure: "DTI/SEC/CDA" },
      { item: "Occupancy Permit", whereToSecure: "Office of the Building Official" },
      { item: "Sanitary Permit", whereToSecure: "Municipal Health Office" },
      { item: "Community Tax Certificate", whereToSecure: "Office of the Municipal Treasurer/ Barangay" },
      { item: "Contract of lease (if lessee)", whereToSecure: "Lessor" },
    ],
    steps: [
      {
        client: "APPLY. Online: upload required documents; submit and monitor; view Tax Order of Payment. Walk-in: submit the checklist of requirements",
        actions: [
          { action: "1.1 Verify: review/verifies application details and submitted documentary requirements", fee: "Computed from different fees desired to be paid", time: "6 minutes", responsible: "Marites G. Estanislao; Aris A. Rimando" },
          { action: "1.2 Endorse: endorse to the following offices: Bureau of Fire, Office of the Building Official and Municipal Health Office/Sanitary", responsible: "FO3 Billy Lopez, Jr.; Jenelyn N. Andal; Raul Z. Ojascastro" },
          { action: "1.3 Assess: check computer generated assessment if in order and approve if fees are complete", responsible: "Algen S. Gomez; Wileen A. Caoili" },
        ],
      },
      {
        client: "PAY. Online: online payment. Walk-in: over the counter payment",
        actions: [
          { action: "Receive payment and print official receipts", time: "2 minutes", responsible: "Nellie F. Dilim; Ilene A.I. Hulaton; Ruby G. Galvan" },
        ],
      },
      {
        client: "PRINT. Online: print Business Permit. Walk-in: receive Business Permit",
        actions: [
          { action: "Issue Business Permit to walk-in client", time: "2 minutes", responsible: "Marites G. Estanislao; Aris A. Rimando" },
        ],
      },
    ],
    totalTime: "10 minutes",
    notes: [
      "The fee is printed once in a cell that runs down through the Apply, Pay and Print steps, and the 6-minute time is printed once for the first step (verify, endorse and assess); both are shown on the first action. The persons responsible are paired with the actions in printed order.",
      "ABOUT THE SERVICE: All enterprises must secure a Business/Mayor’s Permit before starting commercial operations. Clients may apply online through the municipality’s Electronic Business Permit and Licensing System (eBPLS) at prod1.ebpls.com/naguilianlaunion, after registering an eBPLS log-in.",
    ],
    page: 172,
    keywords: ["mayor's permit","registration","license","start a business","permit to operate","negosyo","bplo"],
  },
  {
    id: "issuance-of-business-permit-renew",
    name: "Issuance of Business Permit (Renew)",
    category: "business",
    department: "treasury",
    office: "Office of the Municipal Treasurer / Business Permit and Licensing",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Client", "G2B – Government to Business"],
    whoMayAvail: "All Concerned Local Residents",
    requirements: [
      { item: "Filled-up Unified Form", whereToSecure: "Applicable for walk-in clients only / BPLO" },
      { item: "Sanitary Permit", whereToSecure: "Municipal Health Office" },
      { item: "Community Tax Certificate", whereToSecure: "Office of the Municipal Treasurer/ Barangay" },
    ],
    steps: [
      {
        client: "APPLY. Online: upload required documents; submit and monitor; view Tax Order of Payment. Walk-in: submit the checklist of requirements",
        actions: [
          { action: "1.1 Verify: review/verifies application details and submitted documentary requirements", fee: "Computed based on the gross receipts of the business from the preceding year and from different fees desired to be paid", time: "6 minutes", responsible: "Marites G. Estanislao; Aris A. Rimando" },
          { action: "1.2 Endorse: endorse to the following offices: Bureau of Fire, Office of the Building Official and Municipal Health Office/Sanitary", responsible: "FO3 Billy Lopez, Jr.; Jenelyn N. Andal; Raul Z. Ojascastro" },
          { action: "1.3 Assess: check computer generated assessment if in order and approve if fees are complete", responsible: "Algen S. Gomez; Wileen A. Caoili" },
        ],
      },
      {
        client: "PAY. Online: online payment. Walk-in: over the counter payment",
        actions: [
          { action: "Receive payment and print official receipts", time: "2 minutes", responsible: "Nellie F. Dilim; Ilene A.I. Hulaton; Ruby G. Galvan" },
        ],
      },
    ],
    totalTime: "10 minutes",
    notes: [
      "The fee is printed once in a cell that runs down through the Apply, Pay and Print steps, and the 6-minute time is printed once for the first step (verify, endorse and assess); both are shown on the first action. The persons responsible are paired with the actions in printed order.",
      "The charter's printed times add up to 8 minutes but the TOTAL row says 10 minutes; the printed total is kept.",
      "ABOUT THE SERVICE: All enterprises must renew their Business/Mayor’s Permit and pay business taxes on or before January 20 every year; penalties apply after that. Business taxes are a percentage of gross receipts/sales and may be paid quarterly, semi-annually or annually. Clients may apply online through eBPLS at prod1.ebpls.com/naguilianlaunion, after registering an eBPLS log-in.",
    ],
    page: 173,
    keywords: ["renew","renewal","annual","mayor's permit","license","bplo"],
  },
  // ── Environment and Natural Resource Office ───────────────────────────────
  {
    id: "receiving-hauled-garbage-residual",
    name: "Receiving Hauled Garbage (Residual)",
    category: "environment",
    department: "environment",
    office: "Municipal Environment and Natural Resources",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    whoMayAvail: "Everyone",
    requirements: [
      { item: "Order of Payment", whereToSecure: "MENRO" },
      { item: "Official Receipt", whereToSecure: "Treasury" },
    ],
    steps: [
      {
        client: "",
        actions: [
          { action: "Evaluates the garbage and releases order of payment", time: "2 minutes", responsible: "Avito Lexter E. Crieta; Christopher J. Galera" },
        ],
      },
      {
        client: "",
        actions: [
          { action: "Issues Official Receipt (Treasury); checks Official Receipt", fee: "Three (3) wheeler such as tricycles and kuligligs: PHP 20.00/dump; Four (4) wheeler such as jeeps, pick-ups, vans and the like: PHP 100.00/dump; Six (6) wheeler such as light trucks: PHP 500.00/dump; Any ten (10) wheeler trucks: PHP 1,000.00/dump", time: "3-5 minutes", responsible: "Treasury Staff" },
        ],
      },
    ],
    notes: [
      "The client-step cells print only the step numbers, so client text is left blank. The “Issues Official Receipt (Treasury)” and “Checks Official Receipt” lines share one cell and are kept as one action.",
    ],
    page: 190,
    keywords: ["garbage","basura","dump","solid waste","hauled garbage","residual","menro"],
  },
  {
    id: "sale-of-vermicompost",
    name: "Sale of Vermicompost",
    category: "environment",
    department: "environment",
    office: "Municipal Environment and Natural Resources",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    whoMayAvail: "Everyone",
    requirements: [
      { item: "Order of Payment", whereToSecure: "MENRO" },
      { item: "Official Receipt", whereToSecure: "Treasury" },
    ],
    steps: [
      {
        client: "",
        actions: [
          { action: "Release order of payment", time: "2 minutes", responsible: "Avito Lexter E. Crieta; Christopher J. Galera" },
        ],
      },
      {
        client: "",
        actions: [
          { action: "Issues Official Receipt (Treasury)", fee: "PHP 150.00/sack", time: "3-5 minutes", responsible: "Treasury Staff" },
        ],
      },
      {
        client: "",
        actions: [
          { action: "Checks Official Receipt and releases vermicompost", time: "3-5 minutes", responsible: "Silver M. Madayag; Perlino E. Hipona" },
        ],
      },
    ],
    notes: [
      "The client-step cells print only the step numbers, so client text is left blank.",
    ],
    page: 190,
    keywords: ["vermicompost","compost","fertilizer","abono","organic","menro"],
  },
  {
    id: "enro-issuance-of-certificate-tree-geohazard-plans",
    name: "Issuance of Document and/or Certificate (Tree-Cutting, Tree-Planting, Geohazard, Copy of Plans)",
    category: "environment",
    department: "environment",
    office: "Municipal Environment and Natural Resources",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    whoMayAvail: "Everyone",
    requirements: [
      { group: "For Tree-Cutting Endorsement", item: "Request Letter", whereToSecure: "Person Requesting" },
      { group: "For Tree-Cutting Endorsement", item: "Barangay Certificate", whereToSecure: "Barangay LGU" },
      { group: "For Tree-Planting Certificate", item: "Request Letter", whereToSecure: "Person Requesting" },
      { group: "For Tree-Planting Certificate", item: "Documented Activity Report", whereToSecure: "Person Requesting" },
      { group: "For Tree-Planting Certificate", item: "Barangay Certificate", whereToSecure: "Barangay LGU" },
      { group: "For Geohazard Certificate", item: "Spot Map", whereToSecure: "Person Requesting" },
      { group: "Copy of Plans/Documents", item: "Request Letter", whereToSecure: "Person Requesting" },
    ],
    steps: [
      {
        client: "",
        actions: [
          { action: "Evaluates and prepares needed document and/or certificate", time: "10 minutes", responsible: "Avito Lexter E. Crieta; Christopher J. Galera" },
        ],
      },
      {
        client: "",
        actions: [
          { action: "Signing of needed document and/or certification", time: "10 minutes", responsible: "Mark Anthony B. Dilodilo; Other Signatories" },
        ],
      },
      {
        client: "",
        actions: [
          { action: "Releases needed document and/or certification", time: "2 minutes", responsible: "Office Staff" },
        ],
      },
    ],
    notes: [
      "The charter prints two services titled “Issuance of Document and/or Certificate”. This one (page 191) lists tree-cutting endorsement, tree-planting certificate, geohazard certificate and copy of plans/documents; the other (page 194) takes only a request letter. The name qualifiers are added here to tell them apart.",
      "The client-step cells print only the step numbers, so client text is left blank.",
    ],
    page: 191,
    keywords: ["tree cutting","tree-cutting permit","tree planting","geohazard","certificate","copy of plans","menro"],
  },
  {
    id: "responding-to-emergencies",
    name: "Responding to Emergencies",
    category: "environment",
    department: "environment",
    office: "Municipal Environment and Natural Resources",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    whoMayAvail: "Everyone",
    requirements: [],
    steps: [
      {
        client: "",
        actions: [
          { action: "Validate incident reported and activate emergency response team/s", time: "5 minutes", responsible: "Avito Lexter E. Crieta; Christopher J. Galera" },
        ],
      },
      {
        client: "",
        actions: [
          { action: "Coordinate with Barangay Emergency Response Team and/or volunteers for immediate initial first aid until emergency response team reaches incident site", time: "Depending on the distance from the Operation Center", responsible: "Mark Anthony B. Dilodilo" },
        ],
      },
      {
        client: "",
        actions: [
          { action: "Perform extensive but brisk assessment and proper emergency procedures needed", time: "2 minutes", responsible: "Emergency Responders" },
        ],
      },
      {
        client: "",
        actions: [
          { action: "Transport and refer patient/s to the nearest health facility based on the interventions needed while continue monitoring condition", time: "Depending on the distance of the Health Facility", responsible: "Emergency Responders" },
        ],
      },
      {
        client: "",
        actions: [
          { action: "Record and reports incident", time: "10 minutes", responsible: "Emergency Responders" },
        ],
      },
    ],
    notes: [
      "The charter prints no fee column values and no total time. Client-step cells print only the step numbers, so client text is left blank.",
    ],
    page: 192,
    keywords: ["emergency","rescue","first aid","accident","aksidente","ambulance","menro"],
  },
  {
    id: "inspection-of-environmentally-detrimental-projects",
    name: "Inspection of Environmentally Detrimental/Critical Projects/Activities",
    category: "environment",
    department: "environment",
    office: "Municipal Environment and Natural Resources",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    whoMayAvail: "Everyone",
    requirements: [],
    steps: [
      {
        client: "",
        actions: [
          { action: "Validate incident reported and schedule site inspection", time: "5 minutes", responsible: "Avito Lexter E. Crieta; Christopher J. Galera" },
        ],
      },
      {
        client: "",
        actions: [
          { action: "Coordinate with Barangay/s and other agencies concern", time: "5 minutes", responsible: "Mark Anthony B. Dilodilo" },
        ],
      },
      {
        client: "",
        actions: [
          { action: "Do an on-site visitation and inspection with Barangay Council and/or other concern agencies", time: "1 hour", responsible: "MENRO Staff/Inspection Team" },
        ],
      },
      {
        client: "",
        actions: [
          { action: "Record and reports incident", time: "10 minutes", responsible: "MENRO Staff/Inspection Team" },
        ],
      },
      {
        client: "",
        actions: [
          { action: "Give recommendations to higher offices if necessary", time: "Within the day", responsible: "Mark Anthony B. Dilodilo" },
        ],
      },
    ],
    notes: [
      "The charter prints no total time. Client-step cells print only the step numbers, so client text is left blank.",
    ],
    page: 193,
    keywords: ["inspection","complaint","reklamo","pollution","illegal cutting","environment","menro"],
  },
  {
    id: "addressing-verifying-simple-concerns",
    name: "Addressing/Verifying Simple Concerns",
    category: "environment",
    department: "environment",
    office: "Municipal Environment and Natural Resources",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    whoMayAvail: "Everyone",
    requirements: [
      { item: "Request Letter", whereToSecure: "Person Requesting" },
    ],
    steps: [
      {
        client: "",
        actions: [
          { action: "Evaluates and prepares needed document/s", time: "5 minutes", responsible: "Avito Lexter E. Crieta; Christopher J. Galera" },
        ],
      },
      {
        client: "",
        actions: [
          { action: "Provision of information related to issues/concerns", time: "10 minutes", responsible: "Mark Anthony B. Dilodilo; Avito Lexter E. Crieta; Christopher J. Galera" },
        ],
      },
      {
        client: "",
        actions: [
          { action: "Provision of information related to additional issues/concerns", time: "5 minutes", responsible: "Mark Anthony B. Dilodilo; Avito Lexter E. Crieta; Christopher J. Galera" },
        ],
      },
    ],
    notes: [
      "The charter prints no total time. Client-step cells print only the step numbers, so client text is left blank.",
    ],
    page: 193,
    keywords: ["concern","inquiry","verify","information","environment","menro"],
  },
  {
    id: "enro-issuance-of-document-certificate-general",
    name: "Issuance of Document and/or Certificate (General Request)",
    category: "environment",
    department: "environment",
    office: "Municipal Environment and Natural Resources",
    classification: "Simple",
    transactionTypes: ["G2C – Government to Citizen"],
    whoMayAvail: "Everyone",
    requirements: [
      { item: "Request Letter", whereToSecure: "Person/Department Requesting" },
    ],
    steps: [
      {
        client: "",
        actions: [
          { action: "Evaluates and prepares needed document and/or certificate", time: "10 minutes", responsible: "Avito Lexter E. Crieta; Christopher J. Galera" },
        ],
      },
      {
        client: "",
        actions: [
          { action: "Signing of needed document and/or certification", time: "10 minutes", responsible: "Mark Anthony B. Dilodilo; Other Signatories" },
        ],
      },
      {
        client: "",
        actions: [
          { action: "Releases needed document and/or certification", time: "2 minutes", responsible: "Office Staff" },
        ],
      },
    ],
    notes: [
      "The charter prints two services titled “Issuance of Document and/or Certificate”. This one (page 194) takes only a request letter and does not name a document type; the other (page 191) covers tree-cutting, tree-planting, geohazard and copy of plans. The name qualifiers are added here to tell them apart.",
      "The client-step cells print only the step numbers, so client text is left blank.",
    ],
    page: 194,
    keywords: ["certificate","document","request letter","certification","menro"],
  },
  // @services-end
]

// Dev-only guard against transcription slips in the service records.
if (import.meta.env.DEV) {
  const ids = new Set<string>()
  for (const s of services) {
    if (ids.has(s.id)) console.error(`Duplicate service id: ${s.id}`)
    ids.add(s.id)
  }
  for (const c of serviceCategories) {
    if (!services.some((s) => s.category === c.id)) console.error(`Category has no services: ${c.id}`)
  }
}
