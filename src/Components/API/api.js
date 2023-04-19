import axios from "axios";
import registerApi from "../API/registerAPI";
function Api() {
  async function createAccount() {
    const { formData } = registerApi();
    const res = await axios.post(
      "https://dev.go.locate.sa/api/admin/api/v1/test/register",
      {
        fullname: formData.fullname.value,
        email: formData.email.value,
        password: formData.password.value,
      }
    );
    console.log("res->", res);
    console.log(res.data.user);
    return res;
  }
  async function activeAccount(userId) {
    const response = await axios.patch(
      `https://dev.go.locate.sa/api/admin/api/v1/test/users/${userId}/active`,
      {},
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.NjQzNjIyMmQ1NzgwMTEzOWNmYzUyNzMx.FHuabwi3sRHJqU0pBYTZlaZX2nOMgAv88tzNfOPgHpM",
        },
      }
    );
    return response;
  }
  return {
    createAccount,
    activeAccount,
  };
}
export default Api;
