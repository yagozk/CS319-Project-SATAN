import AdminEvaluators from "../adminComponents/AdminEvaluators";
import SuperAdminImportCard from "./SuperAdminImportCard";

export default function SuperAdminEvaluators(props){
    return(
        <div>
            <SuperAdminImportCard importUserType = "evaluators" />
            <br/>
            <AdminEvaluators evaluators = {props.evaluators}/>
        </div>
    )
}