// Find all <style> elements in the <head>
const styles = document.querySelectorAll('head style');

// Loop through each <style> element and check if it contains the class
styles.forEach(style => {
  let cssContent = style.innerHTML;
  
  // Check if the CSS contains ".wkwp-post-content .wkwp-non-blur"
  if (cssContent.includes('.wkwp-post-content .wkwp-non-blur')) {
    // Remove the rule containing the selector
    cssContent = cssContent.replace(/\.wkwp-post-content\s*\.\wkwp-non-blur\s*{[^}]*}/g, '');
    
    // Update the <style> content
    style.innerHTML = cssContent;
  }
});

// Select all div elements with the class "wkwp-paywall"
const paywallDivs = document.querySelectorAll('div.wkwp-paywall');

// Loop through each found element and remove it from the DOM
paywallDivs.forEach(div => {
  div.parentNode.removeChild(div);
});