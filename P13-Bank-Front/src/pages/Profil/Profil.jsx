import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editIdentityButton, cancelIdentityButton } from "../../actions/userActions";
import UserAccountItem from "../../components/UserAccountItem/UserAccountItem";
import { UserAccountItemArray } from "../../datas/UserAccountItemArray";
import { saveIdentity, getUserDatas } from "../../services/auth.service";
import { storageToken } from "../../utils/storageToken";
import { useNavigate } from "react-router-dom";

/**
 * This function takes in a firstName and lastName, and then dispatches an action to update the state
 * with the new firstName and lastName.
 * @param {String} firstName
 * @param {String} dispatch
 * @returns {void}
 */

const Profil = () => {
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  const buttonEditName = useSelector((state) => state.editIdentityButton);
  const inputEditFirstName = useRef();
  const inputEditLastName = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function updateNames(firstName, lastName) {
    if (firstName === "" || lastName === "") return;
    saveIdentity(firstName, lastName, dispatch);
  }

  useEffect(() => {
    const token = storageToken();
    getUserDatas(dispatch, token, navigate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function editIdentity() {
    return (
      <div className="edit-container">
        <div className="edit-sub-container-top">
          <input placeholder={firstName} ref={inputEditFirstName} type="text" className="edit-firstname" />
          <input placeholder={lastName} ref={inputEditLastName} type="text" className="edit-lastname" />
        </div>
        <div className="edit-sub-container-bottom">
          <button
            className="save-button"
            onClick={() => {
              updateNames(inputEditFirstName.current.value, inputEditLastName.current.value);
            }}
          >
            Save
          </button>
          <button className="cancel-button" onClick={() => dispatch(cancelIdentityButton())}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

  function showIdentity() {
    return (
      <>
        <h1 className="user-name">{firstName + " " + lastName}!</h1>
        <button className="edit-button" onClick={() => dispatch(editIdentityButton())}>
          Edit Name
        </button>
      </>
    );
  }

  return (
    <main className="main main-user bg-dark">
      <div className="header">
        <h1>Welcome back</h1>
        {buttonEditName ? editIdentity() : showIdentity()}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {UserAccountItemArray.map((account, index) => (
        <UserAccountItem key={index} {...account} />
      ))}
    </main>
  );
};

export default Profil;
