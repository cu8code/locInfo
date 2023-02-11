/**
 * @param {string} jsonData a string contaning all the html logic
 * @returns {string} a string
 */
const classic = (jsonData) => {
  const style = `
body{
  width: 100%;
  height: 100%;
  display: flex;
  scale: 0.8;
  background:black;
}
  `
  return (
    `
    <html>
      <style>
        ${style}
      </style>
      <body>
        <main>
          <div>
            <div>
              <div>
                <div>
                  ${jsonData.profile.title}
                  ${jsonData.profile.name}
                </div>
              </div>
              <div>
                <img/>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <PhoneIcon />
                ${jsonData.profile.number}
              </div>
              <div>
                <EmailIcon />
                ${jsonData.profile.email}
              </div>
              <div>
                <LocationOnIcon fontSize="8px" className="mr-1" />
                ${jsonData.profile.location}
              </div>
              <div>
                <LanguageIcon fontSize="8px" className="mr-1" />
                ${jsonData.profile.website}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                PROFILE
              </div>
              <div>
                ${jsonData.profile.desription}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                SKILLS
              </div>
              <div>
                <ul>
                  skill Array
                </ul>
              </div>
            </div>
          </div>
          <div >
            <div >
              <div >
                EDUCATION
              </div>
              <div >
                falseData
              </div>
            </div>
          </div>
          <div >
            <div >
              <div >
                EXPERIENCE
              </div>
              <div >
                falseData
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
    `
  );
};


export default classic
