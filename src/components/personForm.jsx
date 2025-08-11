import { Plus } from "lucide-react";
export default function PersonalInfo({
  setName,
  setLastName,
  setJobTitle,
  setEmail,
  setNumber,
  setAddress,
}) {
  return (
    <>
      <div className="input-section">
        <div>
          <h1 className="form-heading">Personal Information</h1>
          <h3 className="form-caption">Enter your personal details</h3>
        </div>
        <div className="form-picture">
          <img src="../../images/person.jpg" alt="personal photo" />
          <div>
            <Plus color="#fdfeff" size={20} />
          </div>
        </div>

        <div className="twoColumnForm">
          <label htmlFor="firstname">
            First Name
            <input
              type="text"
              name="firstname"
              id="firstname"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label htmlFor="lastname">
            Last Name
            <input
              type="text"
              name="lastname"
              id="lastname"
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
        <label htmlFor="jobtitle">
          Job Title
          <input
            type="text"
            name="jobtitle"
            id="jobtitle"
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </label>
        <label htmlFor="Email">
          Email
          <input
            type="email"
            name="Email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="number">
          Phone Number
          <input
            type="tel"
            name="number"
            id="number"
            maxLength={11}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <label htmlFor="address">
          Address
          <input
            type="text"
            name="address"
            id="address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
      </div>
    </>
  );
}
