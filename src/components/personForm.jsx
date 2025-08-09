import { Plus } from "lucide-react";
export default function PersonalInfo() {
  return (
    <>
      <div>
        <h1 className="form-heading">Personal Information</h1>
        <h3 className="form-caption">Enter your personal details</h3>
      </div>
      <div className="input-section">
        <div className="form-picture">
          <img src="../../images/person.jpg" alt="personal photo" />
          <div>
            <Plus color="#fdfeff" size={20} />
          </div>
        </div>
        <label htmlFor="jobtitle">
          Job Title
          <input type="text" name="jobtitle" id="jobtitle" />
        </label>
        <div className="twoColumnForm">
          <label htmlFor="firstname">
            First Name
            <input type="text" name="firstname" id="firstname" />
          </label>
          <label htmlFor="lastname">
            Last Name
            <input type="text" name="lastname" id="lastname" />
          </label>
        </div>
        <label htmlFor="Email">
          Email
          <input type="email" name="Email" id="email" />
        </label>
        <label htmlFor="number">
          Phone Number
          <input type="tel" name="number" id="number" maxLength={10} />
        </label>
        <label htmlFor="address">
          Address
          <input type="text" name="address" id="address" />
        </label>
      </div>
    </>
  );
}
