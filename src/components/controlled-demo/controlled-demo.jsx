import { NavBar } from "../custom-components/navbar";
import { UserControl } from "../custom-components/user-control";
import { Grid } from "../custom-components/grid";

export function ControlledDemo()
{
    return(
        <div className="container-fluid">
            <h2>Contolled Demo</h2>
            <NavBar theme="bg-dark text-white" title="Shopper." menuItems={['Home', 'Shop', 'Products', 'Docs']} logo="logo192.png" />
            <NavBar theme="bg-danger text-white" title="NareshIt" menuItems={['Home', 'Courses', 'NewBatches']} logo="ds.png" />
            <h2>User Controls </h2>
            <div className="w-25">
                <UserControl label="Departure" type="date" />
                <UserControl label="Your Photo" type="file" />
                <UserControl label="Fav Color" type="Color" />
            </div>
            <div>
                <h2>Products</h2>
                <Grid fields= {['Name', 'Price', 'Stock']} data={[{Name:'TV', Price:24000.44, Stock:'Available'}, {Name:'Mobile', Price:12300.44, Stock:'Out Of Stock'}]} />
                <h2>Employee</h2>
                <Grid fields={['First Name', 'Designation']} data={[{FirstName:'John', Designation:'Manager'}]} />
            </div>
        </div>
    )
}