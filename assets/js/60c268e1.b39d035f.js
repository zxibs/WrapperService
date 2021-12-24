"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[547],{95098:function(e){e.exports=JSON.parse('{"functions":[{"name":"Cleanup","desc":"Destroys/Cleans the wrapped instance for GC  \\nReturns the unwrapped version of the wrapped instance  \\n```lua\\n---@type WrappedInstance | Workspace\\nlocal workspace = WrapperService:new(workspace)\\n\\nlocal normalWorkspace: Workspace = workspace:Cleanup()\\n```","params":[],"returns":[{"desc":"","lua_type":"Instance"}],"function_type":"method","source":{"line":66,"path":"moonwave/WrapperService.lua"}},{"name":"Add","desc":"Adds properties to the instance (Event/Method/Property)  \\n```lua\\n<WrappedInstance>:Add({\\n    NewProperty = {\\n        Property = \\"This is a new property!\\"\\n    },\\n\\n    NewMethod = {\\n        Method = function()\\n            return <WrappedInstance>:WaitForProperty(\\"NewProperty\\")\\n        end\\n    }\\n\\n    NewEvent = {\\n        ---@param signal Signal -- This is for IntelliSense\\n        Event = function(signal)\\n            while true do\\n                task.wait(5)\\n                signal:Fire(Random.new():NextInteger(1, math.huge))\\n            end\\n        end\\n    },\\n})\\n\\nlocal NewProperty = <WrappedInstance>.NewProperty\\nNewProperty = <WrappedInstance>:NewMethod()\\n\\nlocal NewConnection = <WrappedInstance>.NewEvent:Connect(function(randomInteger)\\n    print(tostring(randomInteger))\\nend)\\n``` ","params":[{"name":"properties","desc":"","lua_type":"table<string, table<string, any>>"}],"returns":[],"function_type":"method","source":{"line":103,"path":"moonwave/WrapperService.lua"}},{"name":"WaitForProperty","desc":"Basically like `<Instance>:WaitForChild()` but for properties  \\n\\nThis is useful when you want to add a method that\\nreturns a property but the property isn\'t there yet\\n\\nYou can see this function being used in the Add function example above.","params":[{"name":"propertyName","desc":"","lua_type":"string"},{"name":"timeOut?","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"any"}],"function_type":"method","yields":true,"source":{"line":118,"path":"moonwave/WrapperService.lua"}}],"properties":[],"types":[],"name":"WrappedInstance","desc":"","source":{"line":52,"path":"moonwave/WrapperService.lua"}}')}}]);