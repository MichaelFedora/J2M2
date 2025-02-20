/**
 * Sets up handlers for inputs
 */
(function () {
	var jiraInput = document.getElementById("j");
	var markdownInput = document.getElementById("m");
	var imageOptionSelector = 'input[name="imgconvoption"]:checked';

	var jiraCallback = function () {
	  var markdown = J2M.toM(jiraInput.value);
	  markdownInput.value = markdown;
	};

	var markdownCallback = function () {
		markdownImageHandling = document.querySelector(imageOptionSelector).value;
	  var jira = J2M.toJ(markdownInput.value);
		if (markdownImageHandling == 1) {
		  jira = J2M.imgJcaption(jira);
	  } else if (markdownImageHandling == 2) {
		  jira = J2M.imgJreplace(jira);
	  }
	  jiraInput.value = jira;
	};

	jiraInput.addEventListener('keyup', jiraCallback);
	jiraInput.addEventListener('blur', jiraCallback);

	markdownInput.addEventListener('keyup', markdownCallback);
	markdownInput.addEventListener('blur', markdownCallback);
	document.getElementById('imgconv').addEventListener('change', markdownCallback);
})();
