/**
 * Utility functions for image handling
 */

/**
 * Generates a placeholder image URL with customizable parameters
 * Uses the public placeholder.svg service
 *
 * @param {string} text - Text to display on the placeholder
 * @param {number} width - Width of the placeholder
 * @param {number} height - Height of the placeholder
 * @param {string} bgColor - Background color (optional)
 * @param {string} textColor - Text color (optional)
 * @returns {string} - URL for the placeholder image
 */
export function getPlaceholderImageUrl(
  text: string,
  width = 400,
  height = 300,
  bgColor?: string,
  textColor?: string,
): string {
  // Create a simple placeholder URL
  let url = `/placeholder.svg?text=${encodeURIComponent(text)}&width=${width}&height=${height}`

  if (bgColor) url += `&bg=${bgColor}`
  if (textColor) url += `&color=${textColor}`

  return url
}

/**
 * Generates a themed placeholder image URL based on the current theme
 *
 * @param {string} text - Text to display on the placeholder
 * @param {number} width - Width of the placeholder
 * @param {number} height - Height of the placeholder
 * @param {boolean} isDark - Whether dark theme is active
 * @returns {string} - URL for the themed placeholder image
 */
export function getThemedPlaceholderUrl(text: string, width = 400, height = 300, isDark = false): string {
  // Use theme-appropriate colors
  const bgColor = isDark ? "1e293b" : "e2e8f0"
  const textColor = isDark ? "f8fafc" : "0f172a"

  return getPlaceholderImageUrl(text, width, height, bgColor, textColor)
}

/**
 * Generates a project-specific placeholder image URL
 *
 * @param {string} projectName - Name of the project
 * @param {number} width - Width of the placeholder
 * @param {number} height - Height of the placeholder
 * @returns {string} - URL for the project placeholder image
 */
export function getProjectPlaceholderUrl(projectName: string, width = 600, height = 400): string {
  // Create a consistent but unique color based on the project name
  const hash = projectName.split("").reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc)
  }, 0)

  const hue = Math.abs(hash) % 360

  // Return a placeholder with a consistent color for the project
  return `/placeholder.svg?text=${encodeURIComponent(projectName)}&width=${width}&height=${height}&hue=${hue}`
}

