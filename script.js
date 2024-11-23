document.addEventListener('DOMContentLoaded', function () {
    var generateButton = document.getElementById('generate-button');
    var resumeSection = document.getElementById('resume');
    function generateResume() {
        var _a;
        // Retrieve form input values dynamically
        var name = document.getElementById('name').value;
        var profession = document.getElementById('profession').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var address = document.getElementById('address').value;
        var about = document.getElementById('about').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value.split(',');
        var languages = document.getElementById('languages').value.split(',');
        // Retrieve profile photo file
        var profilePhotoInput = document.getElementById('profile-photo');
        var profilePhotoFile = (_a = profilePhotoInput === null || profilePhotoInput === void 0 ? void 0 : profilePhotoInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePhotoURL = '';
        if (profilePhotoFile) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                profilePhotoURL = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                updateResume();
            };
            reader.readAsDataURL(profilePhotoFile);
        }
        else {
            updateResume();
        }
        // Function to dynamically update the resume section
        function updateResume() {
            if (resumeSection) {
                resumeSection.innerHTML = "\n                    <div class=\"resume\">\n                        <div class=\"sidebar\">\n                            ".concat(profilePhotoURL ? "<img src=\"".concat(profilePhotoURL, "\" alt=\"Profile Photo\" class=\"profile-img\">") : '', "\n                            <h2>").concat(name, "</h2>\n                            <p><strong>").concat(profession, "</strong></p>\n                            <h3>About</h3>\n                            <p>").concat(about.replace(/\n/g, '<br>'), "</p>\n                            <h3>Contact</h3>\n                            <p><i class=\"fas fa-envelope\"></i> ").concat(email, "</p>\n                            <p><i class=\"fas fa-phone\"></i> ").concat(phone, "</p>\n                            <p><i class=\"fas fa-map-marker-alt\"></i> ").concat(address, "</p>\n                            <h3>Skills</h3>\n                            <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>\n                        </div>\n                        <div class=\"main-content\">\n                            <h3>Education</h3>\n                            <p>").concat(education.replace(/\n/g, '<br>'), "</p>\n                            <h3>Experience</h3>\n                            <p>").concat(experience.replace(/\n/g, '<br>'), "</p>\n                            <h3>Languages</h3>\n                            <ul>").concat(languages.map(function (language) { return "<li>".concat(language.trim(), "</li>"); }).join(''), "</ul>\n                        </div>\n                    </div>\n                ");
            }
        }
    }
    // Attach event listener to the Generate button
    generateButton === null || generateButton === void 0 ? void 0 : generateButton.addEventListener('click', generateResume);
});
