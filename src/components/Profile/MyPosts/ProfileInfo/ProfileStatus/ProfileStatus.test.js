import React from 'react'
import {create} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";
describe("ProfileStatusComponent",()=>{
    test("Status from props should be in state",()=>{
        const component =create(<ProfileStatus status="IT-KAMASUTRA"/>)
        const instance=component.getInstance()
        expect(instance.state.status).toBe("IT-KAMASUTRA")
    })
    test("After creation <span> should be desplayed",()=>{
        const component =create(<ProfileStatus status="IT-KAMASUTRA"/>)
        const root = component.root
        let span = root.findByType("span")
        expect(span).not.toBeNull()
    })
    test("After creation <span> should contain correct status",()=>{
        const component =create(<ProfileStatus status="IT-KAMASUTRA"/>)
        const root = component.root
        let span = root.findByType("span")
        expect(span.children[0]).toBe("IT-KAMASUTRA")
    })
    test("input should be displayed in editMode",()=>{
        const component =create(<ProfileStatus isOwner={true} status="IT-KAMASUTRA"/>)
        const root = component.root
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input =root.findByType("input")
        expect(input.props.value).toBe("IT-KAMASUTRA")
    })

})