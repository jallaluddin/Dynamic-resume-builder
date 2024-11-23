document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-button');
    const resumeSection = document.getElementById('resume');

    function generateResume() {
        // Retrieve form input values dynamically
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const profession = (document.getElementById('profession') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const address = (document.getElementById('address') as HTMLInputElement).value;
        const about = (document.getElementById('about') as HTMLTextAreaElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
        const languages = (document.getElementById('languages') as HTMLInputElement).value.split(',');

        // Retrieve profile photo file
        const profilePhotoInput = document.getElementById('profile-photo') as HTMLInputElement;
        const profilePhotoFile = profilePhotoInput?.files?.[0];
        let profilePhotoURL = '';

        if (profilePhotoFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profilePhotoURL = e.target?.result as string;
                updateResume();
            };
            reader.readAsDataURL(profilePhotoFile);
        } else {
            updateResume();
        }

        // Function to dynamically update the resume section
        function updateResume() {
            if (resumeSection) {
                resumeSection.innerHTML = `
                    <div class="resume">
                        <div class="sidebar">
                            ${profilePhotoURL ? `<img src="${profilePhotoURL}" alt="Profile Photo" class="profile-img">` : ''}
                            <h2>${name}</h2>
                            <p><strong>${profession}</strong></p>
                            <h3>About</h3>
                            <p>${about.replace(/\n/g, '<br>')}</p>
                            <h3>Contact</h3>
                            <p><i class="fas fa-envelope"></i> ${email}</p>
                            <p><i class="fas fa-phone"></i> ${phone}</p>
                            <p><i class="fas fa-map-marker-alt"></i> ${address}</p>
                            <h3>Skills</h3>
                            <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
                        </div>
                        <div class="main-content">
                            <h3>Education</h3>
                            <p>${education.replace(/\n/g, '<br>')}</p>
                            <h3>Experience</h3>
                            <p>${experience.replace(/\n/g, '<br>')}</p>
                            <h3>Languages</h3>
                            <ul>${languages.map(language => `<li>${language.trim()}</li>`).join('')}</ul>
                        </div>
                    </div>
                `;
            }
        }
    }

    // Attach event listener to the Generate button
    generateButton?.addEventListener('click', generateResume);
});
