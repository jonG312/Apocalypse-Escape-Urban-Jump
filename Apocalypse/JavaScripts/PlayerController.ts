
@Core.Class
export default class PlayerController extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {

        // 既然遥控要角色的属性，就需要先获取角色

        let char = (await Gameplay.asyncGetCurrentPlayer()).character

        // 更改角色的跳跃高度
        char.maxJumpHeight = 150

        // 更改角色的移动速度
        char.maxWalkSpeed = 500
    }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void {

    }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void {

    }
}