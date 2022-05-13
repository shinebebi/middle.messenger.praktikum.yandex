import ChangePasswordPage from "./change-password";
import {withRouter} from "../../../utils/Router";
import {connect} from "../../../utils/store";

export default withRouter(connect((state: any) => ({
    user: state.user.profile
}), ChangePasswordPage));