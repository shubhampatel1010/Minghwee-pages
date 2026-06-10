import { lazy, ComponentType } from "react";

const AccountsPayableLedgerDesktop = lazy(() => import("./pages/AccountsPayableLedgerDesktop"));
const AccountsReceivableLedgerDesktop = lazy(() => import("./pages/AccountsReceivableLedgerDesktop"));
const BookingDetailsDesktop = lazy(() => import("./pages/BookingDetailsDesktop"));
const CandidateProfileDesktop = lazy(() => import("./pages/CandidateProfileDesktop"));
const ClientPartnerHomeDashboardDesktop = lazy(() => import("./pages/ClientPartnerHomeDashboardDesktop"));
const ClientPartnerPaymentsDesktop = lazy(() => import("./pages/ClientPartnerPaymentsDesktop"));
const ComplianceTrackerDesktop = lazy(() => import("./pages/ComplianceTrackerDesktop"));
const ContractSigningDesktop = lazy(() => import("./pages/ContractSigningDesktop"));
const DeploymentCostBreakdownDesktop = lazy(() => import("./pages/DeploymentCostBreakdownDesktop"));
const DeploymentPipelineDesktop = lazy(() => import("./pages/DeploymentPipelineDesktop"));
const DocumentDetailViewDesktop1 = lazy(() => import("./pages/DocumentDetailViewDesktop1"));
const DocumentDetailViewDesktop2 = lazy(() => import("./pages/DocumentDetailViewDesktop2"));
const DocumentReviewQueueDesktop = lazy(() => import("./pages/DocumentReviewQueueDesktop"));
const DocumentTrackerDesktop = lazy(() => import("./pages/DocumentTrackerDesktop"));
const EarningsPaymentsDesktop = lazy(() => import("./pages/EarningsPaymentsDesktop"));
const EmbassyJobProgressDesktop = lazy(() => import("./pages/EmbassyJobProgressDesktop"));
const EmbassyRunnerHomeDesktop = lazy(() => import("./pages/EmbassyRunnerHomeDesktop"));
const EmployerDashboardDesktop = lazy(() => import("./pages/EmployerDashboardDesktop"));
const EscalationManagementDesktop = lazy(() => import("./pages/EscalationManagementDesktop"));
const FinanceHomeOverviewDesktop = lazy(() => import("./pages/FinanceHomeOverviewDesktop"));
const FinancialReportsHubDesktop = lazy(() => import("./pages/FinancialReportsHubDesktop"));
const FullFinancialOverview = lazy(() => import("./pages/FullFinancialOverview"));
const HelperDashboardDesktop = lazy(() => import("./pages/HelperDashboardDesktop"));
const HiringPipelineDesktop = lazy(() => import("./pages/HiringPipelineDesktop"));
const IndividualConsultantPipelineDesktop = lazy(() => import("./pages/IndividualConsultantPipelineDesktop"));
const InterviewSchedulerDesktop = lazy(() => import("./pages/InterviewSchedulerDesktop"));
const JobDetailsUpdateDesktop = lazy(() => import("./pages/JobDetailsUpdateDesktop"));
const LeadDetailActivityLogDesktop = lazy(() => import("./pages/LeadDetailActivityLogDesktop"));
const LeadPipelineKanbanDesktop = lazy(() => import("./pages/LeadPipelineKanbanDesktop"));
const ManagerHomeDashboardDesktop = lazy(() => import("./pages/ManagerHomeDashboardDesktop"));
const ManagerReportsDesktop = lazy(() => import("./pages/ManagerReportsDesktop"));
const MasterAnalytics = lazy(() => import("./pages/MasterAnalytics"));
const MomSubmissionsDesktop = lazy(() => import("./pages/MomSubmissionsDesktop"));
const MyEmbassyJobsDesktop = lazy(() => import("./pages/MyEmbassyJobsDesktop"));
const MyJobsDesktop = lazy(() => import("./pages/MyJobsDesktop"));
const MyKpiProgressDesktop = lazy(() => import("./pages/MyKpiProgressDesktop"));
const OperationsTeamWorkloadDesktop = lazy(() => import("./pages/OperationsTeamWorkloadDesktop"));
const PaymentApprovalQueueDesktop = lazy(() => import("./pages/PaymentApprovalQueueDesktop"));
const PaymentBillingDesktop = lazy(() => import("./pages/PaymentBillingDesktop"));
const PipelineTaskViewDesktop = lazy(() => import("./pages/PipelineTaskViewDesktop"));
const PlacementAdminHomeDashboardDesktop = lazy(() => import("./pages/PlacementAdminHomeDashboardDesktop"));
const PostAJobOrderDesktop = lazy(() => import("./pages/PostAJobOrderDesktop"));
const RemindersAlertsDesktop = lazy(() => import("./pages/RemindersAlertsDesktop"));
const RemindersNotificationsDesktop = lazy(() => import("./pages/RemindersNotificationsDesktop"));
const ReportAnIssueDesktop = lazy(() => import("./pages/ReportAnIssueDesktop"));
const ReviewSubmitComplaintDesktop = lazy(() => import("./pages/ReviewSubmitComplaintDesktop"));
const RoleSelectionDesktop = lazy(() => import("./pages/RoleSelectionDesktop"));
const RunnerEarningsPaymentsDesktop = lazy(() => import("./pages/RunnerEarningsPaymentsDesktop"));
const SalesConsultantHomeDashboardDesktop = lazy(() => import("./pages/SalesConsultantHomeDashboardDesktop"));
const SalesTeamKpiOverviewDesktop = lazy(() => import("./pages/SalesTeamKpiOverviewDesktop"));
const ServiceOrderDesktop = lazy(() => import("./pages/ServiceOrderDesktop"));
const StaffManagement = lazy(() => import("./pages/StaffManagement"));
const SuperAdminHomeDashboard = lazy(() => import("./pages/SuperAdminHomeDashboard"));
const SystemSettingsPermissions = lazy(() => import("./pages/SystemSettingsPermissions"));
const VendorHomeDashboardDesktop = lazy(() => import("./pages/VendorHomeDashboardDesktop"));
const WarmLeadsPriorityViewDesktop = lazy(() => import("./pages/WarmLeadsPriorityViewDesktop"));

export interface ScreenRoute {
  path: string;
  id: string;
  title: string;
  Component: ComponentType;
}

export const screenRoutes: ScreenRoute[] = [
  { path: "/accounts-payable-ledger-desktop", id: "accounts_payable_ledger_desktop", title: "Accounts Payable Ledger", Component: AccountsPayableLedgerDesktop },
  { path: "/accounts-receivable-ledger-desktop", id: "accounts_receivable_ledger_desktop", title: "Accounts Receivable Ledger - AgencyCore Financial", Component: AccountsReceivableLedgerDesktop },
  { path: "/booking-details-desktop", id: "booking_details_desktop", title: "Booking Details - Sentinel Stay", Component: BookingDetailsDesktop },
  { path: "/candidate-profile-desktop", id: "candidate_profile_desktop", title: "Candidate Profile - Ana Santos", Component: CandidateProfileDesktop },
  { path: "/client-partner-home-dashboard-desktop", id: "client_partner_home_dashboard_desktop", title: "AgencyCore - Partner Portal", Component: ClientPartnerHomeDashboardDesktop },
  { path: "/client-partner-payments-desktop", id: "client_partner_payments_desktop", title: "AgencyCore - Payments", Component: ClientPartnerPaymentsDesktop },
  { path: "/compliance-tracker-desktop", id: "compliance_tracker_desktop", title: "Compliance Overview - MingHwee Compliance", Component: ComplianceTrackerDesktop },
  { path: "/contract-signing-desktop", id: "contract_signing_desktop", title: "Review & Sign Employment Contract - Teal Sentinel", Component: ContractSigningDesktop },
  { path: "/deployment-cost-breakdown-desktop", id: "deployment_cost_breakdown_desktop", title: "Deployment Cost Breakdown - AgencyCore", Component: DeploymentCostBreakdownDesktop },
  { path: "/deployment-pipeline-desktop", id: "deployment_pipeline_desktop", title: "Deployment Pipeline - AgencyCore", Component: DeploymentPipelineDesktop },
  { path: "/document-detail-view-desktop-1", id: "document_detail_view_desktop_1", title: "CareAlign Portal - Document Detail View", Component: DocumentDetailViewDesktop1 },
  { path: "/document-detail-view-desktop-2", id: "document_detail_view_desktop_2", title: "Document Detail - Teal Sentinel", Component: DocumentDetailViewDesktop2 },
  { path: "/document-review-queue-desktop", id: "document_review_queue_desktop", title: "Document Review Queue", Component: DocumentReviewQueueDesktop },
  { path: "/document-tracker-desktop", id: "document_tracker_desktop", title: "Document Tracker - Serene Concierge", Component: DocumentTrackerDesktop },
  { path: "/earnings-payments-desktop", id: "earnings_payments_desktop", title: "Earnings & Payments - MingHwee Vendor Portal", Component: EarningsPaymentsDesktop },
  { path: "/embassy-job-progress-desktop", id: "embassy_job_progress_desktop", title: "Embassy Job Progress Update", Component: EmbassyJobProgressDesktop },
  { path: "/embassy-runner-home-desktop", id: "embassy_runner_home_desktop", title: "MingHwee Embassy Runner - Dashboard", Component: EmbassyRunnerHomeDesktop },
  { path: "/employer-dashboard-desktop", id: "employer_dashboard_desktop", title: "MingHwee | Employer Dashboard", Component: EmployerDashboardDesktop },
  { path: "/escalation-management-desktop", id: "escalation_management_desktop", title: "OpsControl - Escalation Management", Component: EscalationManagementDesktop },
  { path: "/finance-home-overview-desktop", id: "finance_home_overview_desktop", title: "Finance Overview - AgencyCore", Component: FinanceHomeOverviewDesktop },
  { path: "/financial-reports-hub-desktop", id: "financial_reports_hub_desktop", title: "Financial Reports Hub - MingHwee", Component: FinancialReportsHubDesktop },
  { path: "/full-financial-overview", id: "full_financial_overview", title: "Financials \u2014 April 2026", Component: FullFinancialOverview },
  { path: "/helper-dashboard-desktop", id: "helper_dashboard_desktop", title: "Helper Dashboard - Teal Sentinel", Component: HelperDashboardDesktop },
  { path: "/hiring-pipeline-desktop", id: "hiring_pipeline_desktop", title: "Hiring Pipeline - Serene Concierge", Component: HiringPipelineDesktop },
  { path: "/individual-consultant-pipeline-desktop", id: "individual_consultant_pipeline_desktop", title: "ConsulPath Manager - Consultant Pipeline", Component: IndividualConsultantPipelineDesktop },
  { path: "/interview-scheduler-desktop", id: "interview_scheduler_desktop", title: "Interview Scheduler", Component: InterviewSchedulerDesktop },
  { path: "/job-details-update-desktop", id: "job_details_update_desktop", title: "Job Details & Update - MingHwee Professional", Component: JobDetailsUpdateDesktop },
  { path: "/lead-detail-activity-log-desktop", id: "lead_detail_activity_log_desktop", title: "lead_detail_activity_log_desktop", Component: LeadDetailActivityLogDesktop },
  { path: "/lead-pipeline-kanban-desktop", id: "lead_pipeline_kanban_desktop", title: "VisaFlow CRM - Sales Pipeline", Component: LeadPipelineKanbanDesktop },
  { path: "/manager-home-dashboard-desktop", id: "manager_home_dashboard_desktop", title: "manager_home_dashboard_desktop", Component: ManagerHomeDashboardDesktop },
  { path: "/manager-reports-desktop", id: "manager_reports_desktop", title: "CareManager Executive - Reports", Component: ManagerReportsDesktop },
  { path: "/master-analytics", id: "master_analytics", title: "Business Intelligence", Component: MasterAnalytics },
  { path: "/mom-submissions-desktop", id: "mom_submissions_desktop", title: "MOM Submissions - MingHwee Professional", Component: MomSubmissionsDesktop },
  { path: "/my-embassy-jobs-desktop", id: "my_embassy_jobs_desktop", title: "My Embassy Jobs - VisaRunner Pro", Component: MyEmbassyJobsDesktop },
  { path: "/my-jobs-desktop", id: "my_jobs_desktop", title: "My Jobs - MingHwee Professional", Component: MyJobsDesktop },
  { path: "/my-kpi-progress-desktop", id: "my_kpi_progress_desktop", title: "My KPI Progress - HelperLink Admin", Component: MyKpiProgressDesktop },
  { path: "/operations-team-workload-desktop", id: "operations_team_workload_desktop", title: "Placement Admin Workload - Agency Insights", Component: OperationsTeamWorkloadDesktop },
  { path: "/payment-approval-queue-desktop", id: "payment_approval_queue_desktop", title: "Payment Approval Queue - AgencyCore Finance", Component: PaymentApprovalQueueDesktop },
  { path: "/payment-billing-desktop", id: "payment_billing_desktop", title: "Employer Payment & Billing - Teal Sentinel", Component: PaymentBillingDesktop },
  { path: "/pipeline-task-view-desktop", id: "pipeline_task_view_desktop", title: "Pipeline Task View - MingHwee Admin", Component: PipelineTaskViewDesktop },
  { path: "/placement-admin-home-dashboard-desktop", id: "placement_admin_home_dashboard_desktop", title: "Placement Admin Home Dashboard", Component: PlacementAdminHomeDashboardDesktop },
  { path: "/post-a-job-order-desktop", id: "post_a_job_order_desktop", title: "Post a Job Order - AgencyCore Modern", Component: PostAJobOrderDesktop },
  { path: "/reminders-alerts-desktop", id: "reminders_alerts_desktop", title: "Reminders & Alerts - MingHwee Pro", Component: RemindersAlertsDesktop },
  { path: "/reminders-notifications-desktop", id: "reminders_notifications_desktop", title: "Reminders & Notifications - Embassy Runner", Component: RemindersNotificationsDesktop },
  { path: "/report-an-issue-desktop", id: "report_an_issue_desktop", title: "Report an Issue - PlacementPro", Component: ReportAnIssueDesktop },
  { path: "/review-submit-complaint-desktop", id: "review_submit_complaint_desktop", title: "Review & Submit Complaint - Teal Sentinel", Component: ReviewSubmitComplaintDesktop },
  { path: "/role-selection-desktop", id: "role_selection_desktop", title: "Role Selection | PlacementSource", Component: RoleSelectionDesktop },
  { path: "/runner-earnings-payments-desktop", id: "runner_earnings_payments_desktop", title: "Earnings Dashboard - Embassy Runner", Component: RunnerEarningsPaymentsDesktop },
  { path: "/sales-consultant-home-dashboard-desktop", id: "sales_consultant_home_dashboard_desktop", title: "sales_consultant_home_dashboard_desktop", Component: SalesConsultantHomeDashboardDesktop },
  { path: "/sales-team-kpi-overview-desktop", id: "sales_team_kpi_overview_desktop", title: "Sales Team Performance \u2014 April 2026", Component: SalesTeamKpiOverviewDesktop },
  { path: "/service-order-desktop", id: "service_order_desktop", title: "Serene Concierge - Select a Service", Component: ServiceOrderDesktop },
  { path: "/staff-management", id: "staff_management", title: "Staff Management - Team", Component: StaffManagement },
  { path: "/super-admin-home-dashboard", id: "super_admin_home_dashboard", title: "MingHwee Command Center - Dashboard", Component: SuperAdminHomeDashboard },
  { path: "/system-settings-permissions", id: "system_settings_permissions", title: "System Settings - Command Center", Component: SystemSettingsPermissions },
  { path: "/vendor-home-dashboard-desktop", id: "vendor_home_dashboard_desktop", title: "Vendor Home Dashboard - MingHwee Professional", Component: VendorHomeDashboardDesktop },
  { path: "/warm-leads-priority-view-desktop", id: "warm_leads_priority_view_desktop", title: "Warm Leads - LeadFlow Pro", Component: WarmLeadsPriorityViewDesktop }
];
