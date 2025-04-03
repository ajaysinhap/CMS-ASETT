export const formStyles = {
  // Typography
  heading: {
    h1: "text-3xl ds-u-font-weight--bold text-gray-900 mb-6",
    h2: "text-2xl ds-u-font-weight--bold text-gray-900 mb-4",
    h3: "text-xl ds-u-font-weight--semibold text-gray-900 mb-3",
    section: "text-lg ds-u-font-weight--semibold text-gray-900 mb-4"
  },
  
  // Form Elements
  input: "mt-1 ds-u-display--block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2e6da4] focus:border-[#2e6da4] text-sm transition-colors duration-200",
  label: "ds-u-display--block text-sm font-medium text-gray-700 mb-2",
  select: "mt-1 ds-u-display--block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2e6da4] focus:border-[#2e6da4] text-sm transition-colors duration-200 appearance-none ds-u-fill--white bg-no-repeat bg-[right_0.5rem_center] bg-[length:1.5em_1.5em] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%236B7280%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M10%203a1%201%200%2001.707.293l3%203a1%201%200%2001-1.414%201.414L10%205.414%207.707%207.707a1%201%200%2001-1.414-1.414l3-3A1%201%200%200110%203zm-3.707%209.293a1%201%200%20011.414%200L10%2014.586l2.293-2.293a1%201%200%20011.414%201.414l-3%203a1%201%200%2001-1.414%200l-3-3a1%201%200%20010-1.414z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')]",
  
  // Form Groups
  formGroup: "space-y-2 mb-4",
  section: "ds-u-fill--white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm mb-6",
  sectionTitle: "text-lg ds-u-font-weight--semibold text-gray-900 mb-6",
  
  // Required Field Indicator
  required: "text-red-600 text-sm ml-1",
  
  // Buttons
  button: {
    primary: "ds-u-display--inline-flex ds-u-align-items--center px-6 py-2.5 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-[#2e6da4] hover:bg-[#2e6da4]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2e6da4] transition-colors duration-200",
    secondary: "ds-u-display--inline-flex ds-u-align-items--center px-6 py-2.5 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 ds-u-fill--white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2e6da4] transition-colors duration-200"
  },

  // Checkbox
  checkbox: "h-5 w-5 text-[#2e6da4] focus:ring-[#2e6da4] border-gray-300 rounded-md transition-colors duration-200",

  // Error States
  error: {
    input: "border-red-300 focus:ring-red-500 focus:border-red-500",
    message: "mt-2 text-sm text-red-600"
  },

  // Success States
  success: {
    input: "border-green-300 focus:ring-green-500 focus:border-green-500",
    message: "mt-2 text-sm text-green-600"
  },

  // Help Text
  helpText: "mt-2 text-sm text-gray-500",

  // Form Layout
  layout: {
    container: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
    section: "space-y-6",
    grid: "grid grid-cols-1 gap-6 sm:grid-cols-2"
  }
}; 