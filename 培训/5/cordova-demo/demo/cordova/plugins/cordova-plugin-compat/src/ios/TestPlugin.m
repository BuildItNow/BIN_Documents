//
//  TestPlugin.m
//  demo
//
//  Created by Checker on 16/9/25.
//
//

#import "TestPlugin.h"

@implementation TestPlugin

- (void)helloCordova:(CDVInvokedUrlCommand*)command
{
    UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"Cordova" message:@"Hello!" delegate:self cancelButtonTitle:@"OK" otherButtonTitles:nil];
    [alert show];
}

@end
